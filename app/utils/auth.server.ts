// app/utils/auth.server.ts
// Pour gérer l'authentification (l'identité des utilisateurs lors d'une action)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { LoaderFunctionArgs } from "@remix-run/node";
import { getSession, commitSession } from "./session.server";
import { db } from "./db.server";
import { redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function requireUser(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");

  if (!userId || typeof userId !== "number") {
    throw redirect("/login");
  }

  const user = await db.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw redirect("/login");
  }
  return user;
}

export async function createUserSession(userId: number, redirectTo: string) {
  const session = await getSession(null);
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
