import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { listLeads, type LeadCollection } from "@/lib/leadStore";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, reason: "Unauthorized" }, { status: 401 });
  }
  const url = new URL(request.url);
  const collection = url.searchParams.get("collection") as LeadCollection | null;
  const leads = await listLeads(collection ?? undefined);
  return NextResponse.json({ ok: true, leads });
}
