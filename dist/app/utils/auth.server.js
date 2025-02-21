import { getSession, commitSession } from "./session.server";
import { db } from "./db.server";
import { redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
export async function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}
export async function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash);
}
export async function requireUser(request) {
    const session = await getSession(request.headers.get("Cookie"));
    const userId = session.get("userId");
    if (!userId || typeof userId !== "number") {
        throw redirect("/login");
    }
    const user = await db.user.findUnique({ where: { id: userId } });
    if (!user) {
        throw redirect("/login");
    }
    return user;
}
export async function createUserSession(userId, redirectTo) {
    const session = await getSession(null);
    session.set("userId", userId);
    return redirect(redirectTo, {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
}
