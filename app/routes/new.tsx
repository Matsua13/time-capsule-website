// app/routes/capsule/new.tsx
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { requireUser } from "~/utils/auth.server";
import { db } from "~/utils/db.server";
import { useState } from "react";
import { Prisma } from "@prisma/client";
import { promises as fs } from "fs";
import path from "path";
import type { User } from "@prisma/client";
import { sendInstantNotificationEmail } from "~/utils/email.server";

// Le loader s'assure que l'utilisateur est connecté
export const loader: LoaderFunction = async ({ request }) => {
  await requireUser(request);
  return json({});
};

// L'action récupère les données du formulaire, les valide et crée la capsule
export const action: ActionFunction = async ({ request }) => {
  // On s'assure que l'utilisateur est connecté
  const user = await requireUser(request);
  const formData = await request.formData();

  const title = formData.get("title");
  const content = formData.get("content");
  const scheduledDate = formData.get("scheduledDate");
  const visibility = formData.get("visibility");

  // Validation minimale
  if (typeof title !== "string" || title.trim() === "") {
    return json({ error: "Please, choose a name for your capsule." }, { status: 400 });
  }
  if (typeof content !== "string" || content.trim() === "") {
    return json({ error: "Please, put some content." }, { status: 400 });
  }
  if (typeof scheduledDate !== "string" || scheduledDate.trim() === "") {
    return json({ error: "Please, choose the opening day." }, { status: 400 });
  }
  if (typeof visibility !== "string") {
    return json({ error: "Please, choose the visibility." }, { status: 400 });
  }

  // Gestion de l'option Groupe
  let groupRecipients: string[] = [];
  let recipientType: string | null = null;
  const recipientUsers: User[] = [];
  let groupRecipientStored: string | null = null;

  if (visibility === "group") {
    const groupChoice = formData.get("groupChoice");
    if (groupChoice === "username") {
      const groupUsernames = formData.get("groupUsername") as string;
      if (!groupUsernames || groupUsernames.trim() === "") {
        return json({ error: "Please enter at least one recipient username." }, { status: 400 });
      }
      groupRecipients = groupUsernames
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
      recipientType = "username";
    } else if (groupChoice === "email") {
      const groupEmails = formData.get("groupEmail") as string;
      if (!groupEmails || groupEmails.trim() === "") {
        return json({ error: "Please enter at least one recipient email." }, { status: 400 });
      }
      groupRecipients = groupEmails
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
      recipientType = "email";
    }
    groupRecipientStored = groupRecipients.join(", ");

    // Rechercher les utilisateurs correspondants pour chaque destinataire
    for (const r of groupRecipients) {
      let foundUser;
      if (recipientType === "email") {
        foundUser = await db.user.findUnique({
          where: { email: r },
        });
      } else if (recipientType === "username") {
        foundUser = await db.user.findFirst({
          where: { username: r },
        });
      }
      // S'assurer que le destinataire n'est pas l'utilisateur qui envoie la capsule
      if (foundUser && foundUser.id !== user.id) {
        recipientUsers.push(foundUser);
      }
    }
  }

  // Création de la capsule dans la base de données
  const capsuleData: Prisma.CapsuleUncheckedCreateInput = {
    ownerId: user.id,
    title: title.trim(),
    content: content.trim(),
    scheduledDate: new Date(scheduledDate),
    visibility,
    groupRecipient: visibility === "group" ? groupRecipientStored : null,
    recipientType: visibility === "group" ? recipientType : null,
  };

  const capsule = await db.capsule.create({ data: capsuleData });

  // Si la capsule est de type group et que des destinataires ont été trouvés,
  // créer une notification pour chacun et envoyer l'e-mail instantané
  if (visibility === "group" && recipientUsers.length > 0) {
    for (const recipientUser of recipientUsers) {
      const notificationMessage = `capsule:${capsule.id}: someone's thinking about you!`;
      await db.notification.create({
        data: {
          userId: recipientUser.id,
          message: notificationMessage,
        },
      });
      console.log("Notification created for user", recipientUser.id);
      await sendInstantNotificationEmail(recipientUser.email, capsule.title);
    }
  }

  // Gestion facultative du media
  const mediaFile = formData.get("mediaFile") as File | null;
  if (mediaFile && mediaFile.size > 0) {
    const arrayBuffer = await mediaFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = `${Date.now()}-${mediaFile.name}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const filePath = path.join(uploadDir, filename);
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(filePath, buffer);

    let mediaType = "file";
    if (mediaFile.type.startsWith("image/")) {
      mediaType = "image";
    } else if (mediaFile.type.startsWith("video/")) {
      mediaType = "video";
    } else if (mediaFile.type.startsWith("audio/")) {
      mediaType = "audio";
    }

    await db.media.create({
      data: {
        capsule: { connect: { id: capsule.id } },
        type: mediaType,
        url: `/uploads/${filename}`,
      },
    });
  }

  // Rediriger vers la page de détail de la capsule créée
  return redirect(`/${capsule.id}`);
};

export default function NewCapsule() {
  const actionData = useActionData<{ error?: string }>();
  const transition = useNavigation();

  const [selectedVisibility, setSelectedVisibility] = useState("private");
  const [groupChoice, setGroupChoice] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const confirmed = window.confirm(
      "Warning: Once created, the capsule cannot be modified. This is deliberate, to encourage you to be in the present. The editable draft option will come later for those who need more reflection."
    );
    if (!confirmed) {
      event.preventDefault();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4">
      <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
        Create a new Capsule
      </h1>
      <Form
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500"
      >
        {actionData?.error && (
          <div className="mb-4 text-red-600 font-bold">{actionData.error}</div>
        )}
        <label className="block mb-4">
          Capsule Name:
          <input
            type="text"
            name="title"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </label>
        <label className="block mb-4">
          Your thoughts:
          <textarea
            name="content"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </label>
        <label className="block mb-4">
          Opening Day:
          <input
            type="datetime-local"
            name="scheduledDate"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </label>
        <label className="block mb-4">
          Visibility:
          <select
            name="visibility"
            required
            onChange={(e) => {
              setSelectedVisibility(e.target.value);
              if (e.target.value !== "group") {
                setGroupChoice("");
              }
            }}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="private">Private</option>
            <option value="public">Public</option>
            <option value="group">Group</option>
          </select>
        </label>
        {selectedVisibility === "group" && (
          <fieldset className="mb-4 border border-gray-300 p-4 rounded">
            <legend className="text-lg font-semibold mb-2">
              How do you want to send the Capsule?
            </legend>
            <div className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="groupChoice"
                  value="username"
                  onChange={(e) => setGroupChoice(e.target.value)}
                  className="mr-2"
                  required
                />
                Via username
              </label>
            </div>
            <div className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="groupChoice"
                  value="email"
                  onChange={(e) => setGroupChoice(e.target.value)}
                  className="mr-2"
                  required
                />
                Via email
              </label>
            </div>
            {groupChoice === "username" && (
              <label className="block mt-2">
                Recipient usernames (comma separated):
                <input
                  type="text"
                  name="groupUsername"
                  required
                  placeholder="selim, jane, maïa"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
            )}
            {groupChoice === "email" && (
              <label className="block mt-2">
                Recipient emails (comma separated):
                <input
                  type="text"
                  name="groupEmail"
                  required
                  placeholder="selim@example.com, jane@example.com"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
            )}
          </fieldset>
        )}
        <fieldset className="mb-4 border border-gray-300 p-4 rounded">
          <legend className="text-lg font-semibold">
            Add a gift
          </legend>
          <label className="block mb-2">
            Select a media type:
            <input
              type="file"
              name="mediaFile"
              accept="image/*,video/*,audio/*"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </label>
        </fieldset>
        <button
          type="submit"
          disabled={transition.state === "submitting"}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition"
        >
          {transition.state === "submitting"
            ? "Creation ongoing..."
            : "Let's create the magic capsule!"}
        </button>
      </Form>
    </div>
  );
}
