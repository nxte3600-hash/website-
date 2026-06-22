import { NextResponse } from "next/server";
import { createLead } from "@/lib/leadStore";

export async function POST(request: Request) {
  const payload = await request.json();
  const result = await createLead("dealerLeads", payload, "dealer-form");
  if (!result.ok) return NextResponse.json(result, { status: 503 });
  return NextResponse.json(result);
}
