import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable import/no-duplicates */
// app/routes/dashboard.tsx
import { Link, Form, useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { requireUser } from "~/utils/auth.server";
import Timeline from "~/components/Timeline";
import CalendarView from "~/components/CalendarView";
import { useState, useEffect } from "react";
// Loader pour récupérer les données du dashboard
export const loader = async ({ request }) => {
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
    const reminders = capsulesTransformed
        .filter((c) => {
        const capsuleDate = new Date(c.scheduledDate);
        return (capsuleDate >= tomorrow &&
            capsuleDate < dayAfterTomorrow &&
            c.ownerId !== user.id);
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
export const action = async ({ request }) => {
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
    const { capsules, user, notifications, reminders } = useLoaderData();
    const [filter, setFilter] = useState("all");
    const [localReminders, setLocalReminders] = useState(reminders);
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
    }
    else if (filter === "received") {
        filteredCapsules = capsules.filter((c) => c.ownerId !== user.id);
    }
    const now = new Date();
    const upcomingCapsules = filteredCapsules.filter((c) => new Date(c.scheduledDate) >= now);
    const pastCapsules = filteredCapsules.filter((c) => new Date(c.scheduledDate) < now);
    return (_jsxs("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: [localReminders.length > 0 && (_jsx("div", { className: "mb-6 p-4 bg-emerald-100 text-emerald-800 rounded", children: localReminders.map((reminder) => (_jsx("p", { className: "text-sm", children: reminder.message }, reminder.id))) })), notifications.length > 0 && (_jsx("div", { className: "mb-6 p-4 bg-amber-100 text-amber-800 rounded", children: notifications.map((notif) => {
                    const match = notif.message.match(/^capsule:(\d+):\s*(.*)/);
                    if (match) {
                        const capsuleId = match[1];
                        const displayMessage = match[2];
                        return (_jsx("p", { className: "text-sm", children: _jsx("a", { href: `/notification?capsuleId=${capsuleId}&notifId=${notif.id}`, className: "hover:underline", children: displayMessage }) }, notif.id));
                    }
                    else {
                        return _jsx("p", { className: "text-sm", children: notif.message }, notif.id);
                    }
                }) })), _jsxs("div", { className: "flex justify-between items-center mb-8", children: [_jsx("h1", { className: "text-5xl font-extrabold drop-shadow-xl", children: "Dashboard" }), _jsx(Form, { method: "post", action: "/logout", children: _jsx("button", { type: "submit", className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition", children: "Log out" }) })] }), _jsx("section", { className: "flex justify-center mb-8", children: _jsx(Link, { to: "/new", className: "bg-amber-300 hover:bg-amber-500 text-white px-6 py-3 rounded transition", children: "Create a Capsule" }) }), _jsxs("div", { className: "mb-6 flex space-x-4", children: [_jsx("button", { onClick: () => setFilter("all"), className: `px-4 py-2 rounded transition ${filter === "all" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"}`, children: "All Capsules" }), _jsx("button", { onClick: () => setFilter("sent"), className: `px-4 py-2 rounded transition ${filter === "sent" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"}`, children: "Sent" }), _jsx("button", { onClick: () => setFilter("received"), className: `px-4 py-2 rounded transition ${filter === "received" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"}`, children: "Received" })] }), _jsxs("section", { className: "mb-8", children: [_jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Upcoming Capsules" }), upcomingCapsules.length ? (_jsx("div", { className: "grid gap-4", children: upcomingCapsules.map((capsule) => (_jsxs("div", { className: "flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold", children: _jsx(Link, { to: `/${capsule.id}`, className: "text-sky-700 hover:underline", children: capsule.title }) }), _jsx("p", { className: "text-sm text-gray-600", children: capsule.content }), _jsxs("p", { className: "text-xs text-gray-500", children: ["Opening day: ", new Date(capsule.scheduledDate).toLocaleString()] })] }), _jsx(Link, { to: "/delete-capsules", className: "ml-4 text-red-600 hover:text-red-800", title: "Manage capsule deletions", children: "\uD83D\uDDD1\uFE0F" })] }, capsule.id))) })) : (_jsx("p", { children: "No upcoming capsules." }))] }), _jsxs("section", { className: "mb-8", children: [_jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Previous Capsules" }), pastCapsules.length ? (_jsx("div", { className: "grid gap-4", children: pastCapsules.map((capsule) => (_jsxs("div", { className: "flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold", children: _jsx(Link, { to: `/${capsule.id}`, className: "text-sky-700 hover:underline", children: capsule.title }) }), _jsx("p", { className: "text-sm text-gray-600", children: capsule.content }), _jsxs("p", { className: "text-xs text-gray-500", children: ["Opening day: ", new Date(capsule.scheduledDate).toLocaleString()] })] }), _jsx(Link, { to: "/delete-capsules", className: "ml-4 text-red-600 hover:text-red-800", title: "Manage capsule deletions", children: "\uD83D\uDDD1\uFE0F" })] }, capsule.id))) })) : (_jsx("p", { children: "No previous capsules." }))] }), _jsxs("section", { className: "mb-8", children: [_jsx("h2", { className: "text-center text-2xl font-semibold mb-4", children: "Visualisations" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: "Timeline" }), _jsx(Timeline, { capsules: capsules })] }), _jsxs("div", { className: "bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: "Calendar" }), _jsx(CalendarView, { capsules: capsules })] })] })] })] }));
}
