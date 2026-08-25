"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send } from "lucide-react";
import { vehicles } from "@/lib/vehicles";

type LeadFormKind = "contact" | "dealer" | "testRide";
type Status = "idle" | "sending" | "success" | "error";

const endpointByKind: Record<LeadFormKind, string> = {
  contact: "/api/contact",
  dealer: "/api/dealer",
  testRide: "/api/test-rides"
};

export function LeadCaptureForm({ kind, tone = "light" }: { kind: LeadFormKind; tone?: "light" | "dark" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const dark = tone === "dark";
  const models = useMemo(() => vehicles.map((vehicle) => ({ id: vehicle.id, name: vehicle.name })), []);
  const fieldClass = dark
    ? "nxte-input border-white/18 bg-white/10 text-white placeholder:text-white/48"
    : "nxte-input";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!String(data.name || "").trim() || !String(data.phone || "").trim()) {
      setError("Please add your name and phone number so the NXTE team can respond.");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(endpointByKind[kind], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("We could not submit this request. Please retry or use WhatsApp +91-9289484831.");
    }
  }

  return (
    <form onSubmit={onSubmit} className={`${dark ? "rounded-2xl bg-[var(--nxte-navy)] text-white" : "nxte-card"} grid gap-4 p-6 sm:p-8`} noValidate>
      <div>
        <p className="nxte-kicker">{kind === "dealer" ? "Dealer enquiry" : kind === "testRide" ? "Book a test ride" : "Contact NXTE"}</p>
        <h2 className="nxte-display mt-2 text-2xl font-bold">Share your details</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Full name
          <input name="name" required className={fieldClass} placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Phone number
          <input name="phone" required inputMode="tel" className={fieldClass} placeholder="+91..." />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-bold">
        Email
        <input name="email" type="email" className={fieldClass} placeholder="you@example.com" />
      </label>

      {kind === "dealer" ? (
        <>
          <label className="grid gap-2 text-sm font-bold">
            Business name
            <input name="company" className={fieldClass} placeholder="Company or showroom name" />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              Preferred territory
              <input name="city" className={fieldClass} placeholder="City / district" />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Investment range
              <select name="investmentRange" className={fieldClass} defaultValue="">
                <option value="" disabled>Choose range</option>
                <option>15-20 lakhs</option>
                <option>20-25 lakhs</option>
                <option>25 lakhs+</option>
              </select>
            </label>
          </div>
        </>
      ) : null}

      {kind === "testRide" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">
            Vehicle
            <select name="vehicleId" className={fieldClass} defaultValue="">
              <option value="" disabled>Select model</option>
              {models.map((model) => <option key={model.id} value={model.id}>{model.name}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold">
            City
            <input name="city" className={fieldClass} placeholder="Your city" />
          </label>
        </div>
      ) : null}

      {kind === "contact" ? (
        <label className="grid gap-2 text-sm font-bold">
          Inquiry type
          <select name="inquiryType" className={fieldClass} defaultValue="">
            <option value="" disabled>Choose inquiry</option>
            <option>Vehicle purchase</option>
            <option>Test ride</option>
            <option>Dealership</option>
            <option>Fleet / B2B</option>
            <option>Service support</option>
          </select>
        </label>
      ) : null}

      <label className="grid gap-2 text-sm font-bold">
        Message
        <textarea name="message" className={`${fieldClass} min-h-32 resize-y`} placeholder="Tell us your route, city, finance need or business inquiry" />
      </label>

      {error ? <p className={dark ? "text-sm font-semibold text-white" : "text-sm font-semibold text-[var(--nxte-orange)]"}>{error}</p> : null}
      {status === "success" ? <p className="text-sm font-semibold">Request received. The NXTE team can follow up from the lead pipeline.</p> : null}

      <button type="submit" disabled={status === "sending"} className="nxte-button nxte-button-primary w-full disabled:cursor-wait disabled:opacity-70">
        <Send size={18} /> {status === "sending" ? "Sending..." : status === "error" ? "Retry submission" : "Submit request"}
      </button>
    </form>
  );
}
