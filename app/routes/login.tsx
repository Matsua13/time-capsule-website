// app/routes/login.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, Link } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { db } from "~/utils/db.server";
import { createUserSession } from "~/utils/auth.server";

interface ActionData {
  error?: string;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // Validation basique
  if (typeof email !== "string" || typeof password !== "string") {
    return json<ActionData>({ error: "Invalid form details" }, { status: 400 });
  }

  // Rechercher l'utilisateur par email
  const user = await db.user.findUnique({ where: { email } });
  if (!user) {
    return json<ActionData>({ error: "Invalid IDs" }, { status: 400 });
  }

  // Vérifier le mot de passe hashé
  const isCorrectPassword = await bcrypt.compare(password, user.password);
  if (!isCorrectPassword) {
    return json<ActionData>({ error: "Invalid IDs" }, { status: 400 });
  }

  // Création de la session et redirection (la fonction gère les cookies sécurisés)
  return createUserSession(user.id, "/dashboard");
};

export default function LoginPage() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4">
      <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
        Let&#39;s create magic!
      </h1>
      <Form
        method="post"
        className="w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500"
      >
        {actionData?.error ? (
          <div className="mb-4 text-red-600 font-bold">{actionData.error}</div>
        ) : null}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-lg font-semibold text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition"
        >
          Log in
        </button>
      </Form>
      <p className="mt-4 text-white">
        Not a member yet?{" "}
        <Link
          to="/signup"
          className="text-blue-200 underline font-semibold"
        >
          Joins us!
        </Link>
      </p>
    </div>
  );
}
