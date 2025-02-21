import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// app/routes/login.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { json } from "@remix-run/node";
import { Form, useActionData, Link } from "@remix-run/react";
import bcrypt from "bcryptjs";
import { db } from "~/utils/db.server";
import { createUserSession } from "~/utils/auth.server";
export const action = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    // Validation basique
    if (typeof email !== "string" || typeof password !== "string") {
        return json({ error: "Invalid form details" }, { status: 400 });
    }
    // Rechercher l'utilisateur par email
    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
        return json({ error: "Invalid IDs" }, { status: 400 });
    }
    // Vérifier le mot de passe hashé
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
        return json({ error: "Invalid IDs" }, { status: 400 });
    }
    // Création de la session et redirection (la fonction gère les cookies sécurisés)
    return createUserSession(user.id, "/dashboard");
};
export default function LoginPage() {
    const actionData = useActionData();
    return (_jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: [_jsx("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg", children: "Let's create magic!" }), _jsxs(Form, { method: "post", className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [actionData?.error ? (_jsx("div", { className: "mb-4 text-red-600 font-bold", children: actionData.error })) : null, _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "email", className: "block text-lg font-semibold text-gray-700 mb-1", children: "Email" }), _jsx("input", { type: "email", name: "email", id: "email", required: true, className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "password", className: "block text-lg font-semibold text-gray-700 mb-1", children: "Password" }), _jsx("input", { type: "password", name: "password", id: "password", required: true, className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" })] }), _jsx("button", { type: "submit", className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition", children: "Log in" })] }), _jsxs("p", { className: "mt-4 text-white", children: ["Not a member yet?", " ", _jsx(Link, { to: "/signup", className: "text-blue-200 underline font-semibold", children: "Joins us!" })] })] }));
}
