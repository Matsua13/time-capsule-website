// app/routes/logout.tsx
import { redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { destroySession, getSession } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  // Ici, 'request' est typé grâce à ActionFunction
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};

export const loader: LoaderFunction = async () => {
  return redirect("/");
};

export default function Logout() {
  return null;
}
