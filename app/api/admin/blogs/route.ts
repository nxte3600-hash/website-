import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { createCmsBlogPost, listCmsBlogPosts } from "@/lib/blogStore";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, reason: "Unauthorized" }, { status: 401 });
  }
  const posts = await listCmsBlogPosts();
  return NextResponse.json({ ok: true, posts });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, reason: "Unauthorized" }, { status: 401 });
  }
  const payload = await request.json();
  const result = await createCmsBlogPost(payload);
  if (!result.ok) return NextResponse.json(result, { status: 503 });
  return NextResponse.json(result);
}
