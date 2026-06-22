import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { deleteCmsBlogPost, updateCmsBlogPost } from "@/lib/blogStore";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, reason: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const patch = await request.json();
  const result = await updateCmsBlogPost(id, patch);
  return NextResponse.json({ ok: true, ...result });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, reason: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const result = await deleteCmsBlogPost(id);
  return NextResponse.json({ ok: true, ...result });
}
