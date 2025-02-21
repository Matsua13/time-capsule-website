import { jsx as _jsx } from "react/jsx-runtime";
// app/routes/confirm.tsx
import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";
export const loader = async ({ request }) => {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");
    if (!token) {
        throw new Response("Token manquant", { status: 400 });
    }
    const user = await db.user.findFirst({ where: { confirmationToken: token } });
    if (!user) {
        throw new Response("Token invalide ou expiré", { status: 400 });
    }
    // Mettre à jour l'utilisateur pour marquer l'e-mail comme confirmé
    await db.user.update({
        where: { id: user.id },
        data: { emailConfirmed: true, confirmationToken: null },
    });
    // Rediriger vers la page de connexion ou une page de confirmation
    return redirect("/login?confirmed=1");
};
export default function Confirm() {
    return _jsx("p", { children: "Confirmation ongoing\u2026" });
}
