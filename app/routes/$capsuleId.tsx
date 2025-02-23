/* eslint-disable jsx-a11y/media-has-caption */
// app/routes/capsule/$capsuleId.tsx
import { json, redirect } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { requireUser } from "~/utils/auth.server";
import { db } from "~/utils/db.server";

interface Owner {
  id: number;
  username: string;
  email: string;
}

interface Capsule {
  id: number;
  title: string;
  content: string;
  scheduledDate: string;
  formattedScheduledDate: string; // La date formatée côté serveur
  visibility: string;
  groupRecipient?: string | null;
  recipientType?: string | null;
  media: Array<{ id: number; type: string; url: string }>;
  ownerId: number;
  owner: Owner;
}

interface LoaderData {
  capsule: Capsule;
  currentUser: { id: number; email: string; username: string };
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const currentUser = await requireUser(request);
  const capsuleId = params.capsuleId;
  console.log("Requête reçue pour capsule ID:", capsuleId);

  if (!capsuleId) {
    throw new Response("Missing capsule ID", { status: 400 });
  }

  const capsule = await db.capsule.findUnique({
    where: { id: parseInt(capsuleId) },
    include: { media: true, owner: true },
  });
  if (!capsule) {
    throw new Response("Capsule not found", { status: 404 });
  }

  const now = new Date();
  const scheduledDate = new Date(capsule.scheduledDate);

  // Si la capsule n'est pas encore ouverte :
  // - pour une capsule privée, toujours verrouillée, même pour le propriétaire ;
  // - pour les autres, verrouillée pour les non-propriétaires.
  if (now < scheduledDate && (capsule.visibility === "private" || currentUser.id !== capsule.ownerId)) {
    return redirect(
      `/dashboard?locked=true&opening=${encodeURIComponent(scheduledDate.toLocaleString())}`
    );
  }

  const formattedScheduledDate = scheduledDate.toLocaleString("en-US", {
    timeZone: "UTC",
  });

  return json({
    capsule: {
      ...capsule,
      formattedScheduledDate,
    },
    currentUser,
  });
};

export default function CapsuleDetail() {
  const { capsule } = useLoaderData<LoaderData>();

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500">
        <h1 className="text-4xl font-extrabold drop-shadow-lg mb-4">
          {capsule.title}
        </h1>
        <p className="mb-4 text-lg">{capsule.content}</p>
        <p className="mb-4 text-sm text-gray-600">
          Opening day: {new Date(capsule.scheduledDate).toLocaleString()}
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Visibility: {capsule.visibility}
        </p>
        {capsule.ownerId !== capsule.owner.id && (
          <p className="mb-4 text-sm text-gray-600">
            Sent by {capsule.recipientType}:{" "}
            {capsule.owner.username || capsule.owner.email}
          </p>
        )}
        {capsule.visibility === "group" && capsule.groupRecipient && (
          <p className="mb-4 text-sm text-gray-600">
            Group capsule intended for {capsule.recipientType}: {capsule.groupRecipient}
          <p>Sent by: {capsule.owner.username || capsule.owner.email}</p>
          </p>
        )}
        {capsule.media && capsule.media.length > 0 && (
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">
              Special gifts with your capsule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capsule.media.map((media) => (
                <div key={media.id} className="p-2 border rounded">
                  {media.type.startsWith("image") ? (
                    <img src={media.url} alt="" className="w-full" />
                  ) : media.type.startsWith("video") ? (
                    <video controls src={media.url} className="w-full" />
                  ) : (
                    <audio controls src={media.url} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-8">
          <Link
            to="/dashboard"
            className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
