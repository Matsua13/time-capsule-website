// app/utils/email.server.ts
import * as nodemailer from 'nodemailer';

// Configure le transport avec Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // ton adresse Gmail dans .env
    pass: process.env.GMAIL_PASS  // ton mot de passe ou App Password si 2FA est activé dans .env
  }
});

// Envoyer un e-mail de confirmation à l'inscription
export async function sendConfirmationEmail(to: string, token: string): Promise<void> {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  // Construit l'URL de confirmation en utilisant BASE_URL
  const confirmationUrl = `${baseUrl}/confirm?token=${token}`;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: 'Please, confirm your e-mail address',
    text: `Click on this link to confirm your account: ${confirmationUrl}`,
    html: `<p>Click on <a href="${confirmationUrl}">this link</a> to confirm your account and join us!</p>`
  };

  await transporter.sendMail(mailOptions);
}

// Envoyer un e-mail instantané lorsque quelqu'un vous envoie une capsule
export async function sendInstantNotificationEmail(to: string, capsuleTitle: string): Promise<void> {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  // Vous pouvez définir un lien vers le dashboard ou vers la capsule
  const notificationUrl = `${baseUrl}/dashboard`;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: 'Someone is thinking about you 🌻',
    text: `You have received a capsule titled "${capsuleTitle}". Visit your dashboard for more details: ${notificationUrl}\n\nBest regards,\nThe Time Capsule Team`,
    html: `<p>You have received a capsule titled "<strong>${capsuleTitle}</strong>".</p>
           <p>Visit your <a href="${notificationUrl}">dashboard</a> for more details.</p>
           <p>Best regards,<br>The <strong>Time Capsule</strong> Team</p>`
  };

  await transporter.sendMail(mailOptions);
}

// Envoyer un rappel pour les capsules qui ouvrent demain
export async function sendReminderEmail(to: string, capsuleTitle: string, openingDate: string): Promise<void> {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
  // Vous pouvez diriger l'utilisateur vers le dashboard ou la capsule
  const reminderUrl = `${baseUrl}/dashboard`;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: 'Reminder: Your capsule opens tomorrow 🤩',
    text: `Reminder: Your capsule "${capsuleTitle}" is scheduled to open on ${openingDate}. For more details, visit: ${reminderUrl}\n\nBest regards,\nThe Time Capsule Team`,
    html: `<p>Reminder: Your capsule "<strong>${capsuleTitle}</strong>" is scheduled to open on ${openingDate}.</p>
           <p>For more details, visit your <a href="${reminderUrl}">dashboard</a>.</p>
           <p>Best regards,<br>The <strong>Time Capsule</strong> Team</p>`
  };

  await transporter.sendMail(mailOptions);
}
