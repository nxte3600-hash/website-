import { NextResponse } from "next/server";
import { createLead } from "@/lib/leadStore";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(request: Request) {
  const payload = await request.json();
  const result = await createLead("contactLeads", payload, "contact-form");
  if (!result.ok) return NextResponse.json(result, { status: 503 });
  return NextResponse.json(result);
}
