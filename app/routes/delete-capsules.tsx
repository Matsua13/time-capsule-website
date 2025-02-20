// app/routes/delete-capsules.tsx
import { json, redirect } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { Form, useLoaderData, Link } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { requireUser } from "~/utils/auth.server";

interface Capsule {
  id: number;
  title: string;
}

interface LoaderData {
  capsules: Capsule[];
}

// Loader pour récupérer la liste des capsules de l'utilisateur connecté
export const loader: LoaderFunction = async ({ request }) => {
  const user = await requireUser(request);
  const capsules = await db.capsule.findMany({
    where: { ownerId: user.id },
    select: { id: true, title: true },
  });
  return json({ capsules });
};

// Action pour supprimer une capsule
export const action: ActionFunction = async ({ request }) => {
  const user = await requireUser(request);
  const formData = await request.formData();
  const capsuleId = formData.get("capsuleId");

  if (typeof capsuleId !== "string") {
    return json({ error: "Invalid capsule ID" }, { status: 400 });
  }

  // Vérifie que la capsule existe et appartient à l'utilisateur connecté
  const capsule = await db.capsule.findUnique({
    where: { id: parseInt(capsuleId) },
    select: { ownerId: true },
  });

  if (!capsule || capsule.ownerId !== user.id) {
    return json({ error: "Capsule not found or unauthorized" }, { status: 404 });
  }

  // Supprimer les médias associés à cette capsule
  await db.media.deleteMany({
    where: { capsuleId: parseInt(capsuleId) },
  });

  // Supprimer la capsule
  await db.capsule.delete({
    where: { id: parseInt(capsuleId) },
  });

  return redirect("/delete-capsules");
};

export default function DeleteCapsules() {
  const { capsules } = useLoaderData<LoaderData>();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4">
      <div className="w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500">
        <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg text-center">
          Manage Your Capsules
        </h1>
        {capsules.length === 0 ? (
          <p className="text-center text-lg">No capsules found.</p>
        ) : (
          <ul className="space-y-4">
            {capsules.map((capsule) => (
              <li
                key={capsule.id}
                className="flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition"
              >
                <span className="text-xl font-medium">{capsule.title}</span>
                <Form
                  method="post"
                  onSubmit={(e) => {
                    if (
                      !window.confirm("Are you sure you want to delete this capsule?")
                    ) {
                      e.preventDefault();
                    }
                  }}
                >
                  <input type="hidden" name="capsuleId" value={capsule.id} />
                  <button
                    type="submit"
                  >
                    🗑️
                  </button>
                </Form>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 text-center">
          <Link to="/dashboard" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
