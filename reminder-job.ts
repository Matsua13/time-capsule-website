// reminder-job.ts
import { db } from "./app/utils/db.server";
import { sendReminderEmail } from "./app/utils/email.server";

async function runReminderJob() {
  const now = new Date();

  // Définir le début de demain
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  // Définir le début du jour suivant (pour limiter aux capsules de demain)
  const dayAfterTomorrow = new Date(tomorrow);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);

  // Récupérer les capsules dont l'ouverture est prévue demain et dont le rappel n'a pas encore été envoyé
  const capsulesToRemind = await db.capsule.findMany({
    where: {
      scheduledDate: {
        gte: tomorrow,
        lt: dayAfterTomorrow,
      },
      reminderSent: false,
    },
    include: { owner: true }, // pour récupérer l'e-mail de l'utilisateur
  });

  for (const capsule of capsulesToRemind) {
    try {
      await sendReminderEmail(
        capsule.owner.email,
        capsule.title,
        capsule.scheduledDate.toLocaleString()
      );
      // Marquer que le rappel a été envoyé pour éviter des envois multiples
      await db.capsule.update({
        where: { id: capsule.id },
        data: { reminderSent: true },
      });
      console.log(`Reminder sent for capsule ${capsule.id}`);
    } catch (error) {
      console.error(`Failed to send reminder for capsule ${capsule.id}:`, error);
    }
  }
}

runReminderJob()
  .then(() => {
    console.log("Reminder job completed.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error running reminder job:", error);
    process.exit(1);
  });
