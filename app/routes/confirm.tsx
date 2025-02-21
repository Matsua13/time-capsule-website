// app/routes/confirm.tsx
import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!token) {
    throw new Response("Missing token", { status: 400 });
  }

  const user = await db.user.findFirst({ where: { confirmationToken: token } });
  if (!user) {
    throw new Response("Invalid token", { status: 400 });
  }

  // Met à jour l'utilisateur pour marquer l’e-mail comme confirmé et supprimer le token
  await db.user.update({
    where: { id: user.id },
    data: { emailConfirmed: true, confirmationToken: null },
  });

  // Redirige vers la page de connexion ou une page de confirmation
  return redirect("/login?confirmed=1");
};

export default function Confirm() {
  return <p>Confirmation ongoing…</p>;
}
