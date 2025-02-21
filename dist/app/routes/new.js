import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// app/routes/capsule/new.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
// eslint-disable-next-line import/no-unresolved
import { requireUser } from "~/utils/auth.server";
// eslint-disable-next-line import/no-unresolved
import { db } from "~/utils/db.server";
import { useState } from "react";
import { promises as fs } from "fs";
import path from "path";
import { sendInstantNotificationEmail } from "~/utils/email.server";
// Le loader s'assure que l'utilisateur est connecté
export const loader = async ({ request }) => {
    await requireUser(request);
    return json({});
};
// L'action récupère les données du formulaire, les valide et crée la capsule
export const action = async ({ request }) => {
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
    let groupRecipient = null;
    let recipientType = null;
    let recipientUser = null;
    if (visibility === "group") {
        const groupChoice = formData.get("groupChoice");
        if (groupChoice === "username") {
            groupRecipient = formData.get("groupUsername");
            recipientType = "username";
        }
        else if (groupChoice === "email") {
            groupRecipient = formData.get("groupEmail");
            recipientType = "email";
        }
        if (!groupRecipient || groupRecipient.trim() === "") {
            return json({ error: "Please enter the username or email of the recipient" }, { status: 400 });
        }
        if (recipientType === "email") {
            recipientUser = await db.user.findUnique({
                where: { email: groupRecipient.trim() },
            });
        }
        else if (recipientType === "username") {
            recipientUser = await db.user.findFirst({
                where: { username: groupRecipient.trim() },
            });
        }
        console.log("Recipient user:", recipientUser);
        // Vérifier que le destinataire n'est pas l'utilisateur qui envoie la capsule
        if (recipientUser && recipientUser.id === user.id) {
            recipientUser = null;
        }
    }
    // Création de la capsule dans la base de données et association à l'utilisateur connecté
    const capsuleData = {
        ownerId: user.id,
        title: title.trim(),
        content: content.trim(),
        scheduledDate: new Date(scheduledDate),
        visibility,
        groupRecipient: visibility === "group" ? groupRecipient.trim() : null,
        recipientType: visibility === "group" ? recipientType : null,
    };
    const capsule = await db.capsule.create({ data: capsuleData });
    // Si la capsule est de type group et qu'un destinataire a été trouvé,
    // on crée une notification en incluant l'ID de la capsule dans le message.
    if (visibility === "group" && recipientUser && recipientUser.id !== user.id) {
        const notificationMessage = `capsule:${capsule.id}: someone's thinking about you!`;
        await db.notification.create({
            data: {
                userId: recipientUser.id,
                message: notificationMessage,
            },
        });
        console.log("Notification created for user", recipientUser.id);
        // Envoi de l'e-mail instantané au destinataire
        await sendInstantNotificationEmail(recipientUser.email, capsule.title);
    }
    // Gestion facultative du media
    const mediaFile = formData.get("mediaFile");
    if (mediaFile && mediaFile.size > 0) {
        // Lis le contenu du fichier sous forme de Buffer
        const arrayBuffer = await mediaFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        // Crée un nom de fichier unique (ici avec Date.now() + le nom original)
        const filename = `${Date.now()}-${mediaFile.name}`;
        // Détermine le chemin où sauvegarder le fichier (ex.: public/uploads)
        const uploadDir = path.join(process.cwd(), "public", "uploads");
        const filePath = path.join(uploadDir, filename);
        // Assure-toi que le dossier existe (sinon, crée-le)
        await fs.mkdir(uploadDir, { recursive: true });
        // Sauvegarde le fichier sur le disque
        await fs.writeFile(filePath, buffer);
        // Détermine le type de média en fonction du type MIME
        let mediaType = "file";
        if (mediaFile.type.startsWith("image/")) {
            mediaType = "image";
        }
        else if (mediaFile.type.startsWith("video/")) {
            mediaType = "video";
        }
        else if (mediaFile.type.startsWith("audio/")) {
            mediaType = "audio";
        }
        // Enregistre le média en base de données
        await db.media.create({
            data: {
                capsule: { connect: { id: capsule.id } },
                type: mediaType,
                // L'URL est ici le chemin relatif vers le fichier
                url: `/uploads/${filename}`,
            },
        });
    }
    // Redirection vers la page de détail de la capsule créée
    return redirect(`/${capsule.id}`);
};
export default function NewCapsule() {
    const actionData = useActionData();
    const transition = useNavigation();
    // États pour gérer l'affichage conditionnel
    const [selectedVisibility, setSelectedVisibility] = useState("private");
    const [groupChoice, setGroupChoice] = useState("");
    // Confirmation avant soumission
    const handleSubmit = (event) => {
        const confirmed = window.confirm("Warning: Once created, the capsule cannot be modified. This is deliberate, to encourage you to be yourself: the idea is to be in the present. The editable draft option will come later for those who need more reflection.");
        if (!confirmed) {
            event.preventDefault();
        }
    };
    return (_jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: [_jsx("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg", children: "Create a new Capsule" }), _jsxs(Form, { method: "post", encType: "multipart/form-data", onSubmit: handleSubmit, className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [actionData?.error && (_jsx("div", { className: "mb-4 text-red-600 font-bold", children: actionData.error })), _jsxs("label", { className: "block mb-4", children: ["Capsule Name:", _jsx("input", { type: "text", name: "title", required: true, className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" })] }), _jsxs("label", { className: "block mb-4", children: ["Your thoughts:", _jsx("textarea", { name: "content", required: true, className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" })] }), _jsxs("label", { className: "block mb-4", children: ["Opening Day:", _jsx("input", { type: "datetime-local", name: "scheduledDate", required: true, className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" })] }), _jsxs("label", { className: "block mb-4", children: ["Visibility:", _jsxs("select", { name: "visibility", required: true, onChange: (e) => {
                                    setSelectedVisibility(e.target.value);
                                    if (e.target.value !== "group") {
                                        setGroupChoice("");
                                    }
                                }, className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500", children: [_jsx("option", { value: "private", children: "Private" }), _jsx("option", { value: "public", children: "Public" }), _jsx("option", { value: "group", children: "Group" })] })] }), selectedVisibility === "group" && (_jsxs("fieldset", { className: "mb-4 border border-gray-300 p-4 rounded", children: [_jsx("legend", { className: "text-lg font-semibold mb-2", children: "How do you want to send the Capsule?" }), _jsx("div", { className: "mb-2", children: _jsxs("label", { className: "inline-flex items-center", children: [_jsx("input", { type: "radio", name: "groupChoice", value: "username", onChange: (e) => setGroupChoice(e.target.value), className: "mr-2", required: true }), "Via username"] }) }), _jsx("div", { className: "mb-2", children: _jsxs("label", { className: "inline-flex items-center", children: [_jsx("input", { type: "radio", name: "groupChoice", value: "email", onChange: (e) => setGroupChoice(e.target.value), className: "mr-2", required: true }), "Via email"] }) }), groupChoice === "username" && (_jsxs("label", { className: "block mt-2", children: ["Recipient username:", _jsx("input", { type: "text", name: "groupUsername", required: true, className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" })] })), groupChoice === "email" && (_jsxs("label", { className: "block mt-2", children: ["Recipient email:", _jsx("input", { type: "email", name: "groupEmail", required: true, className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" })] }))] })), _jsxs("fieldset", { className: "mb-4 border border-gray-300 p-4 rounded", children: [_jsx("legend", { className: "text-lg font-semibold", children: "Add a gift" }), _jsxs("label", { className: "block mb-2", children: ["Select a media type:", _jsx("input", { type: "file", name: "mediaFile", accept: "image/*,video/*,audio/*", className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" })] })] }), _jsx("button", { type: "submit", disabled: transition.state === "submitting", className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition", children: transition.state === "submitting"
                            ? "Creation ongoing..."
                            : "Let's create the magic capsule!" })] })] }));
}
