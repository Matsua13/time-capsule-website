// app/utils/db.server.ts
// Pour la connexion à la base de donnée Prisma
import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

// On utilise une variable globale pour éviter de recréer plusieurs instances en développement
declare global {
  // eslint-disable-next-line no-var
  var __db: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

export { db };
