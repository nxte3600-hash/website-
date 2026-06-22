import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";

const cookieName = "nxt_admin_session";

function secret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "nxt-dev-admin-secret";
}

export function adminConfigured() {
  return Boolean(process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD);
}

export function createAdminToken(email: string) {
  const issued = Date.now().toString();
  const payload = `${email}:${issued}`;
  const sig = createHmac("sha256", secret()).update(payload).digest("hex");
  return `${payload}:${sig}`;
}

export function verifyAdminToken(token?: string) {
  if (!token) return false;
  const parts = token.split(":");
  if (parts.length !== 3) return false;
  const [email, issued, sig] = parts;
  const expected = createHmac("sha256", secret()).update(`${email}:${issued}`).digest("hex");
  const valid =
    sig.length === expected.length &&
    timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  const ageMs = Date.now() - Number(issued);
  return valid && ageMs < 1000 * 60 * 60 * 12;
}

export async function isAdminAuthenticated() {
  const jar = await cookies();
  return verifyAdminToken(jar.get(cookieName)?.value);
}

export async function setAdminCookie(token: string) {
  const jar = await cookies();
  jar.set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12
  });
}

export async function clearAdminCookie() {
  const jar = await cookies();
  jar.delete(cookieName);
}
