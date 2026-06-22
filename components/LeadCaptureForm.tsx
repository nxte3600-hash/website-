"use client";

import { useState } from "react";
import { Handshake } from "lucide-react";
import { vehicles } from "@/lib/vehicles";

type LeadFormKind = "contact" | "dealer" | "testRide";

const endpointByKind: Record<LeadFormKind, string> = {
  contact: "/api/contact",
  dealer: "/api/dealer",
  testRide: "/api/test-rides"
};

export function LeadCaptureForm({ kind, tone = "light" }: { kind: LeadFormKind; tone?: "light" | "dark" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const dark = tone === "dark";
  const inputClass = dark
    ? "rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none placeholder:text-steel-400 focus:border-electric-cyan"
    : "rounded-2xl border border-slate-200 bg-white px-4 py-4 text-midnight outline-none focus:border-navy-700";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch(endpointByKind[kind], {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-4 ${dark ? "glass-panel rounded-[2.5rem] p-6 sm:p-8" : "white-premium h-fit rounded-[2.5rem] p-6 shadow-panel sm:p-8"}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required className={inputClass} placeholder="Full name" />
        <input name="phone" required className={inputClass} placeholder="Phone number" />
      </div>
      <input name="email" type="email" className={inputClass} placeholder="Email address" />

      {kind === "dealer" ? (
        <>
          <input name="company" className={inputClass} placeholder="Company name" />
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="city" className={inputClass} placeholder="Preferred city / territory" />
            <select name="investmentRange" className={inputClass} defaultValue="">
              <option value="" disabled>Investment range</option>
              <option>15-20 lakhs</option>
              <option>20-25 lakhs</option>
              <option>25 lakhs+</option>
            </select>
          </div>
        </>
      ) : null}

      {kind === "testRide" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <select name="vehicleId" className={inputClass} defaultValue="">
            <option value="" disabled>Select model</option>
            {vehicles.map((vehicle) => <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>)}
          </select>
          <input name="city" className={inputClass} placeholder="City" />
        </div>
      ) : null}

      {kind === "contact" ? (
        <select name="inquiryType" className={inputClass} defaultValue="">
          <option value="" disabled>Inquiry type</option>
          <option>Vehicle purchase</option>
          <option>Test ride</option>
          <option>Dealership</option>
          <option>Fleet / B2B</option>
        </select>
      ) : null}

      <textarea
        name="message"
        className={`${inputClass} min-h-36`}
        placeholder={kind === "testRide" ? "Preferred date, dealer, finance query, or message" : "Message"}
      />
      <button
        className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-black ${
          dark ? "bg-gradient-to-r from-electric-cyan to-electric-green text-midnight" : "bg-midnight text-white"
        }`}
        type="submit"
        disabled={status === "sending"}
      >
        <Handshake size={18} /> {status === "sending" ? "Sending..." : kind === "dealer" ? "Submit Dealer Inquiry" : kind === "testRide" ? "Submit Test Ride Request" : "Send Inquiry"}
      </button>
      {status === "success" ? <p className={dark ? "text-electric-green" : "text-emerald-700"}>Request received. The NXT team can follow up from the admin leads pipeline.</p> : null}
      {status === "error" ? <p className={dark ? "text-red-200" : "text-red-700"}>Submission could not be stored. Check MongoDB environment settings or try again later.</p> : null}
    </form>
  );
}
