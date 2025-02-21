// app/routes/signup.tsx
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
  const username = formData.get("username");

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof username !== "string" ||
    !email ||
    !password ||
    !username
  ) {
    return json<ActionData>(
      { error: "Please, try to fill in all the fields correctly." },
      { status: 400 }
    );
  }

  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    return json<ActionData>(
      { error: "Are you sure you don't already have an account with this email?." },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  // Génère un token de confirmation
  const token = randomUUID();

  // Crée l'utilisateur avec le token et en précisant que l’e-mail n’est pas encore confirmé
  const user = await db.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
      confirmationToken: token,
      emailConfirmed: false,
    },
  });

  // Envoie l’e-mail de confirmation
  await sendConfirmationEmail(email, token);

  // Redirige vers une page informant l’utilisateur de vérifier ses e-mails
  return redirect("/check-email");
  // return createUserSession(user.id, "/dashboard");
};

export default function SignupPage() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4">
      <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
        Join the Adventure!
      </h1>
      <Form method="post" className="w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500">
        {actionData?.error ? (
          <div className="mb-4 text-red-600 font-bold">{actionData.error}</div>
        ) : null}
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-semibold text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-1">
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
          <label htmlFor="password" className="block text-lg font-semibold text-gray-700 mb-1">
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
          Start
        </button>
      </Form>
      <p className="mt-4 text-white">
        Already on board?{" "}
        <Link to="/login" className="text-blue-200 underline font-semibold">
          Log in
        </Link>
      </p>
    </div>
  );
}
