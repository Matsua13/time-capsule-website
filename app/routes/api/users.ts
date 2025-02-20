// app/routes/api/users.ts
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { z } from "zod";
import { hashPassword, verifyPassword } from "~/utils/auth.server";

// Schéma de validation pour l'inscription
const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  username: z.string().min(2, { message: "The user name must contain at least 2 characters" }),
  password: z.string().min(8, { message: "The password must contain at least 8 characters" }),
});

// Schéma de validation pour la connexion
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const actionType = formData.get("actionType");

  if (actionType === "register") {
    // Récupération des données d'inscription
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    // Validation des données d'inscription
    try {
      registerSchema.parse({ email, username, password });
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        return json({ error: error.errors }, { status: 400 });
      }
      return json({ error: "Unknown validation error" }, { status: 400 });
    }

    // Vérification si l'utilisateur existe déjà
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return json({ error: "A user with this email already exists" }, { status: 400 });
    }

    // Hachage du mot de passe et création de l'utilisateur
    const hashedPassword = await hashPassword(password);
    const user = await db.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    return json({ user });
  } else if (actionType === "login") {
    // Récupération des données de connexion
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Validation des données de connexion
    try {
      loginSchema.parse({ email, password });
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        return json({ error: error.errors }, { status: 400 });
      }
      return json({ error: "Unknown validation error" }, { status: 400 });
    }

    // Recherche de l'utilisateur
    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
      return json({ error: "User not found" }, { status: 404 });
    }

    // Vérification du mot de passe
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return json({ error: "Invalid password" }, { status: 401 });
    }

    // Ici, on pourrait initialiser une session ou renvoyer un token d'authentification
    return json({ user });
  }

  return json({ error: "Action not recognised" }, { status: 400 });
};

export const loader: LoaderFunction = async () => {
  // Exemple de chargement d'utilisateurs (attention à ne pas exposer de données sensibles)
  const users = await db.user.findMany({
    select: { id: true, email: true, username: true } // Exclut le mot de passe et autres données sensibles
  });
  return json({ users });
};
