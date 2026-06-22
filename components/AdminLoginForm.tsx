"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      router.push("/admin/dashboard");
      router.refresh();
      return;
    }
    setStatus("error");
  }

  return (
    <form onSubmit={onSubmit} className="white-premium mx-auto grid max-w-xl gap-4 rounded-[2rem] p-8 shadow-panel">
      <h1 className="text-4xl font-black leading-none">Admin Login</h1>
      <p className="leading-7 text-slate-600">Use `ADMIN_EMAIL` and `ADMIN_PASSWORD` from the environment. Sessions are stored in an HTTP-only cookie.</p>
      <input name="email" type="email" required className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-midnight outline-none focus:border-navy-700" placeholder="Admin email" />
      <input name="password" type="password" required className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-midnight outline-none focus:border-navy-700" placeholder="Password" />
      <button type="submit" className="rounded-2xl bg-midnight px-6 py-4 font-black text-white" disabled={status === "sending"}>
        {status === "sending" ? "Signing in..." : "Sign in"}
      </button>
      {status === "error" ? <p className="text-sm font-bold text-red-700">Login failed. Check credentials or environment configuration.</p> : null}
    </form>
  );
}
