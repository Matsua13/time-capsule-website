// app/routes/logout.tsx
import { redirect } from "@remix-run/node";
import { destroySession, getSession } from "~/utils/session.server";
export const action = async ({ request }) => {
    // Ici, 'request' est typé grâce à ActionFunction
    const session = await getSession(request.headers.get("Cookie"));
    return redirect("/", {
        headers: {
            "Set-Cookie": await destroySession(session),
        },
    });
};
export const loader = async () => {
    return redirect("/");
};
export default function Logout() {
    return null;
}
