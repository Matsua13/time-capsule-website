import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// app/routes/capsule/$capsuleId.tsx
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { requireUser } from "~/utils/auth.server";
import { db } from "~/utils/db.server";
export const loader = async ({ request, params }) => {
    const currentUser = await requireUser(request);
    const capsuleId = params.capsuleId;
    console.log("Requête reçue pour capsule ID:", capsuleId); // Vérifie la réception de l'ID
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
    // Pré-calculer la date formatée en mode fixe (ici, en UTC par exemple)
    const formattedScheduledDate = new Date(capsule.scheduledDate)
        .toLocaleString("en-US", { timeZone: "UTC" });
    return json({
        capsule: {
            ...capsule,
            formattedScheduledDate, // Ajout de la date pré-formatée
        },
        currentUser,
    });
};
export default function CapsuleDetail() {
    console.log("Capsule Detail est rendu");
    const { capsule, currentUser } = useLoaderData();
    return (_jsx("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: _jsxs("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [_jsx("h1", { className: "text-4xl font-extrabold drop-shadow-lg mb-4", children: capsule.title }), _jsx("p", { className: "mb-4 text-lg", children: capsule.content }), _jsxs("p", { className: "mb-4 text-sm text-gray-600", children: ["Opening day: ", new Date(capsule.scheduledDate).toLocaleString()] }), _jsxs("p", { className: "mb-4 text-sm text-gray-600", children: ["Visibility: ", capsule.visibility] }), capsule.ownerId !== currentUser.id && (_jsxs("p", { className: "mb-4 text-sm text-gray-600", children: ["Sent by ", capsule.recipientType, ":", " ", capsule.owner.username || capsule.owner.email] })), capsule.visibility === "group" && capsule.groupRecipient && (_jsxs("p", { className: "mb-4 text-sm text-gray-600", children: ["(Group capsule intended for ", capsule.recipientType, ":", " ", capsule.groupRecipient, ")"] })), capsule.media && capsule.media.length > 0 && (_jsxs("div", { className: "mb-4", children: [_jsx("h2", { className: "text-2xl font-semibold mb-2", children: "Special gifts with your capsule" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: capsule.media.map((media) => (_jsx("div", { className: "p-2 border rounded", children: media.type.startsWith("image") ? (_jsx("img", { src: media.url, alt: "", className: "w-full" })) : media.type.startsWith("video") ? (
                                // eslint-disable-next-line jsx-a11y/media-has-caption
                                _jsx("video", { controls: true, src: media.url, className: "w-full" })) : (
                                // eslint-disable-next-line jsx-a11y/media-has-caption
                                _jsx("audio", { controls: true, src: media.url })) }, media.id))) })] })), _jsx("div", { className: "mt-8", children: _jsx(Link, { to: "/dashboard", className: "bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition", children: "Back to dashboard" }) })] }) }));
}
