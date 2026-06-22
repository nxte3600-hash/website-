import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { leadCollections, updateLead, type LeadCollection } from "@/lib/leadStore";

export async function PATCH(request: Request, { params }: { params: Promise<{ collection: string; id: string }> }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, reason: "Unauthorized" }, { status: 401 });
  }
  const { collection, id } = await params;
  if (!leadCollections.includes(collection as LeadCollection)) {
    return NextResponse.json({ ok: false, reason: "Unknown lead collection" }, { status: 400 });
  }
  const patch = await request.json();
  const result = await updateLead(collection as LeadCollection, id, patch);
  return NextResponse.json({ ok: true, ...result });
}
