import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "NXT Assistant is not configured yet. Add OPENAI_API_KEY on the server." },
      { status: 503 }
    );
  }

  try {
    const response = await fetch("https://api.openai.com/v1/realtime/client_secrets", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        session: {
          type: "realtime",
          model: "gpt-realtime",
          audio: {
            output: {
              voice: "echo"
            }
          }
        }
      }),
      cache: "no-store"
    });

    const data = (await response.json()) as {
      error?: { message?: string };
      value?: string;
      expires_at?: number;
      client_secret?: { value?: string; expires_at?: number };
    };

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message ?? "Unable to start the realtime voice session." },
        { status: response.status }
      );
    }

    const clientSecret = data.value ?? data.client_secret?.value;
    const expiresAt = data.expires_at ?? data.client_secret?.expires_at;

    if (!clientSecret) {
      return NextResponse.json({ error: "Realtime voice credential was not returned." }, { status: 502 });
    }

    return NextResponse.json({ clientSecret, expiresAt });
  } catch {
    return NextResponse.json({ error: "Voice service is temporarily unreachable." }, { status: 502 });
  }
}

