/* eslint-disable import/no-duplicates */
// app/routes/dashboard.tsx
import { Link, Form, useLoaderData } from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { requireUser } from "~/utils/auth.server";
import Timeline from "~/components/Timeline";
import CalendarView from "~/components/CalendarView";
import { useState, useEffect } from "react";

type Capsule = {
  id: number;
  title: string;
  content: string | null;
  scheduledDate: string;
  visibility: "private" | "public" | "group";
  ownerId: number;
};

type User = {
  id: number;
  email: string;
  username: string;
};

type Notification = {
  id: number;
  message: string;
  read: boolean;
  createdAt: Date;
};

type Reminder = {
  id: number;
  message: string;
};

type LoaderData = {
  capsules: Capsule[];
  user: User;
  notifications: Notification[];
  reminders: Reminder[];
};

// Loader pour récupérer les données du dashboard
export const loader: LoaderFunction = async ({ request }) => {
  const user = await requireUser(request);

  const capsules = await db.capsule.findMany({
    where: {
      OR: [
        { ownerId: user.id },
        {
          visibility: "group",
          ownerId: { not: user.id },
          OR: [
            { recipientType: "email", groupRecipient: user.email },
            { recipientType: "username", groupRecipient: user.username },
          ],
        },
      ],
    },
  });

  const capsulesTransformed = capsules.map((c) => ({
    ...c,
    scheduledDate: c.scheduledDate.toISOString(),
  }));

  const notifications = await db.notification.findMany({
    where: { userId: user.id, read: false },
    orderBy: { createdAt: "desc" },
  });

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const dayAfterTomorrow = new Date(tomorrow);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);

  const reminders: Reminder[] = capsulesTransformed
    .filter((c) => {
      const capsuleDate = new Date(c.scheduledDate);
      return (
        capsuleDate >= tomorrow &&
        capsuleDate < dayAfterTomorrow &&
        c.ownerId !== user.id
      );
    })
    .map((c) => {
      const openingTime = new Date(c.scheduledDate).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      return {
        id: c.id,
        message: `Hey there, don't forget to open your magical capsule tomorrow at ${openingTime}`,
      };
    });

  return json({ capsules: capsulesTransformed, user, notifications, reminders });
};

// Action pour gérer la suppression d'une capsule depuis le Dashboard
export const action: ActionFunction = async ({ request }) => {
  const user = await requireUser(request);
  const formData = await request.formData();
  const deleteId = formData.get("deleteCapsuleId");

  if (typeof deleteId !== "string") {
    return json({ error: "Invalid capsule ID" }, { status: 400 });
  }

  // Vérifie que la capsule existe et appartient à l'utilisateur
  const capsule = await db.capsule.findUnique({
    where: { id: parseInt(deleteId) },
    select: { ownerId: true },
  });
  if (!capsule || capsule.ownerId !== user.id) {
    return json({ error: "Capsule not found or unauthorized" }, { status: 404 });
  }

  // Supprime d'abord les médias associés
  await db.media.deleteMany({
    where: { capsuleId: parseInt(deleteId) },
  });
  // Puis supprime la capsule
  await db.capsule.delete({
    where: { id: parseInt(deleteId) },
  });

  return redirect("/dashboard");
};

export default function Dashboard() {
  const { capsules, user, notifications, reminders } = useLoaderData<LoaderData>();
  const [filter, setFilter] = useState<"all" | "sent" | "received">("all");
  const [localReminders, setLocalReminders] = useState<Reminder[]>(reminders);

  // Retirer les rappels après 1 minute
  useEffect(() => {
    const timer = setTimeout(() => {
      setLocalReminders([]);
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  let filteredCapsules = capsules;
  if (filter === "sent") {
    filteredCapsules = capsules.filter((c) => c.ownerId === user.id);
  } else if (filter === "received") {
    filteredCapsules = capsules.filter((c) => c.ownerId !== user.id);
  }

  const now = new Date();
  const upcomingCapsules = filteredCapsules.filter(
    (c) => new Date(c.scheduledDate) >= now
  );
  const pastCapsules = filteredCapsules.filter(
    (c) => new Date(c.scheduledDate) < now
  );

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900">
      {/* Rappels */}
      {localReminders.length > 0 && (
        <div className="mb-6 p-4 bg-emerald-100 text-emerald-800 rounded">
          {localReminders.map((reminder) => (
            <p key={reminder.id} className="text-sm">{reminder.message}</p>
          ))}
        </div>
      )}

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="mb-6 p-4 bg-amber-100 text-amber-800 rounded">
          {notifications.map((notif) => {
            const match = notif.message.match(/^capsule:(\d+):\s*(.*)/);
            if (match) {
              const capsuleId = match[1];
              const displayMessage = match[2];
              return (
                <p key={notif.id} className="text-sm">
                  <a
                    href={`/notification?capsuleId=${capsuleId}&notifId=${notif.id}`}
                    className="hover:underline"
                  >
                    {displayMessage}
                  </a>
                </p>
              );
            } else {
              return <p key={notif.id} className="text-sm">{notif.message}</p>;
            }
          })}
        </div>
      )}

      {/* Entête du Dashboard */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-extrabold drop-shadow-xl">Dashboard</h1>
        <Form method="post" action="/logout">
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Log out
          </button>
        </Form>
      </div>

      {/* Bouton de création de capsule */}
      <section className="flex justify-center mb-8">
        <Link
          to="/new"
          className="bg-amber-300 hover:bg-amber-500 text-white px-6 py-3 rounded transition"
        >
          Create a Capsule
        </Link>
      </section>

      {/* Contrôle de filtrage */}
      <div className="mb-6 flex space-x-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded transition ${
            filter === "all" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          All Capsules
        </button>
        <button
          onClick={() => setFilter("sent")}
          className={`px-4 py-2 rounded transition ${
            filter === "sent" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          Sent
        </button>
        <button
          onClick={() => setFilter("received")}
          className={`px-4 py-2 rounded transition ${
            filter === "received" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          Received
        </button>
      </div>

      {/* Section Capsules à venir avec bouton poubelle redirigeant vers /delete-capsules */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Capsules</h2>
        {upcomingCapsules.length ? (
          <div className="grid gap-4">
            {upcomingCapsules.map((capsule) => (
              <div
                key={capsule.id}
                className="flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    <Link to={`/${capsule.id}`} className="text-sky-700 hover:underline">
                      {capsule.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">{capsule.content}</p>
                  <p className="text-xs text-gray-500">
                    Opening day: {new Date(capsule.scheduledDate).toLocaleString()}
                  </p>
                </div>
                {/* Lien avec l'emoji poubelle pour rediriger vers /delete-capsules */}
                <Link
                  to="/delete-capsules"
                  className="ml-4 text-red-600 hover:text-red-800"
                  title="Manage capsule deletions"
                >
                  🗑️
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No upcoming capsules.</p>
        )}
      </section>

      {/* Section Capsules passées avec bouton poubelle */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Previous Capsules</h2>
        {pastCapsules.length ? (
          <div className="grid gap-4">
            {pastCapsules.map((capsule) => (
              <div
                key={capsule.id}
                className="flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    <Link
                      to={`/${capsule.id}`}
                      className="text-sky-700 hover:underline"
                    >
                      {capsule.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">{capsule.content}</p>
                  <p className="text-xs text-gray-500">
                    Opening day: {new Date(capsule.scheduledDate).toLocaleString()}
                  </p>
                </div>
                <Link
                  to="/delete-capsules"
                  className="ml-4 text-red-600 hover:text-red-800"
                  title="Manage capsule deletions"
                >
                  🗑️
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No previous capsules.</p>
        )}
      </section>

      {/* Section Visualisations */}
      <section className="mb-8">
        <h2 className="text-center text-2xl font-semibold mb-4">Visualisations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-2">Timeline</h3>
            <Timeline capsules={capsules} />
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-2">Calendar</h3>
            <CalendarView capsules={capsules} />
          </div>
        </div>
      </section>
    </div>
  );
}
