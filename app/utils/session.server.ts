// app/utils/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
import type { Session } from "@remix-run/node";

// Move the secret check into a function that is called later.
function getSessionSecret() {
  const sessionSecret = process.env.SESSION_SECRET;
  if (!sessionSecret) {
    throw new Error("SESSION_SECRET must be set in the environment or .env file.");
  }
  return sessionSecret;
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    // En production, le cookie ne sera transmis que sur HTTPS.
    secure: process.env.NODE_ENV === "production",
    // Use the function here to get the secret when the cookie is created.
    secrets: [getSessionSecret()],
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