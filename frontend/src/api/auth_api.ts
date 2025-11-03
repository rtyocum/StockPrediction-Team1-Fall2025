import type { User } from "../../../api/src/db/schema";

export async function checkSession(): Promise<User | null> {
    try {
        const res = await fetch(`/api/auth/session`, {
            credentials: "include",
        });
        console.log('res data: ', res)
        if (!res.ok) {
            return null;
        }

        const data: User = await res.json();
        console.log('session data:', data);

        return data
    } catch (error) {
        console.error("Session check error:", error);
        return null;
    }
}

export async function logout(): Promise<void> {
    await fetch(`/api/auth/logout`, {
        credentials: "include",
        method: "POST"
    });
}
