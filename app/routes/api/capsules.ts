// app/routes/api/capsules.ts
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { z } from "zod";

// Définition du schéma de validation pour une capsule
const capsuleSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  scheduledDate: z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
  }, z.date({ required_error: "The planned date is invalid" })),
  ownerId: z.preprocess((val) => Number(val), z.number().int({ message: "The owner ID must be an integer" })),
  visibility: z.enum(["public", "private", "unlisted"], { required_error: "Visibility is required" }),
});

// GET : Récupérer la liste des capsules
export const loader: LoaderFunction = async () => {
  const capsules = await db.capsule.findMany({
    include: { owner: true, media: true, collaborators: true },
  });
  return json({ capsules });
};

// POST : Création d'une nouvelle capsule avec validation
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  // Récupérer les données brutes du formulaire
  const rawData = {
    title: formData.get("title"),
    content: formData.get("content"),
    scheduledDate: formData.get("scheduledDate"),
    ownerId: formData.get("ownerId"),
    visibility: formData.get("visibility"),
  };

  // Valider les données avec Zod
  const result = capsuleSchema.safeParse(rawData);
  if (!result.success) {
    return json({ errors: result.error.errors }, { status: 400 });
  }

  const validatedData = result.data;

  // Création de la capsule dans la base de données
  const capsule = await db.capsule.create({
    data: {
      title: validatedData.title,
      content: validatedData.content,
      scheduledDate: validatedData.scheduledDate,
      ownerId: validatedData.ownerId,
      visibility: validatedData.visibility,
    },
  });

  return json({ capsule });
};
