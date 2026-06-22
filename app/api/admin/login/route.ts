import { NextResponse } from "next/server";
import { adminConfigured, adminUsername, createAdminToken, setAdminCookie } from "@/lib/adminAuth";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  if (!adminConfigured()) {
    return NextResponse.json({ ok: false, reason: "Admin credentials are not configured" }, { status: 503 });
  }
  if (email !== adminUsername() || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ ok: false, reason: "Invalid credentials" }, { status: 401 });
  }
  await setAdminCookie(createAdminToken(email));
  return NextResponse.json({ ok: true });
}
