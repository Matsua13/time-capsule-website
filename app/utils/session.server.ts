// app/utils/session.server.ts
// Pour configurer et gérer les sessions
import { createCookieSessionStorage } from "@remix-run/node";
import type { Session } from "@remix-run/node";

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET must be set in the .env file");
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    // En production, le cookie ne sera transmis que sur HTTPS.
    secure: process.env.NODE_ENV === "production",
    // Utilise le secret défini dans le .env pour signer le cookie
    secrets: [process.env.SESSION_SECRET],
    // SameSite "lax" est un bon compromis pour prévenir les attaques CSRF tout en conservant une bonne expérience utilisateur
    sameSite: "lax",
    // Le cookie sera accessible pour toutes les routes de l'application
    path: "/",
    // Empêche l'accès au cookie via JavaScript côté client
    httpOnly: true,
  },
});

export const getSession = (cookieHeader: string | null) => {
  return sessionStorage.getSession(cookieHeader);
};

export const commitSession = (session: Session) => {
  return sessionStorage.commitSession(session);
};

export const destroySession = (session: Session) => {
  return sessionStorage.destroySession(session);
};
