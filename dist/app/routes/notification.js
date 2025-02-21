import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { requireUser } from "~/utils/auth.server";
export const loader = async ({ request }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await requireUser(request);
    const url = new URL(request.url);
    const capsuleId = url.searchParams.get("capsuleId");
    const notifId = url.searchParams.get("notifId");
    // Mettre à jour la notification pour la marquer comme lue
    if (notifId) {
        await db.notification.update({
            where: { id: parseInt(notifId) },
            data: { read: true },
        });
    }
    // Rediriger vers la capsule si un capsuleId est fourni, sinon vers le dashboard
    if (capsuleId) {
        return redirect(`/${capsuleId}`);
    }
    return redirect("/dashboard");
};
export default function NotificationRedirect() {
    return null;
}
