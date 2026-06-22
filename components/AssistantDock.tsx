"use client";

import Link from "next/link";
import { MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { answerFromCompanyKnowledge, companyDetails } from "@/lib/companyKnowledge";

type ChatMessage = {
  role: "bot" | "user";
  text: string;
};

const greeting =
  "Hi, I am NXT Bot chat. I can help with vehicles, Google Maps locations, finance partners, test rides, WhatsApp, technology, dealership, and the company story.";

export function AssistantDock() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: "bot", text: greeting }]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const whatsappUrl = companyDetails.whatsappUrl;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const ask = (question: string) => {
    const cleaned = question.trim();
    if (!cleaned) return;
    const answer = answerFromCompanyKnowledge(cleaned);
    setMessages((current) => [
      ...current,
      { role: "user", text: cleaned },
      { role: "bot", text: answer }
    ]);
    setInput("");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(input);
  };

  return (
    <>
      <div className="fixed bottom-5 right-[5.5rem] z-[70] flex items-center gap-3 sm:right-[11.5rem]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-14 items-center gap-3 rounded-full bg-[#25D366] px-5 font-black text-white shadow-[0_18px_50px_rgba(37,211,102,.28)]"
          aria-label="Connect with NXT Mobility on WhatsApp"
        >
          <MessageCircle size={21} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-14 w-14 place-items-center rounded-full bg-white text-midnight shadow-panel"
          aria-label="Open NXT text chat"
        >
          {open ? <X /> : <MessageCircle />}
        </button>
      </div>

      {open ? (
        <aside className="fixed bottom-24 right-4 z-[70] flex max-h-[78vh] w-[calc(100vw-2rem)] max-w-md flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-midnight/95 shadow-panel backdrop-blur-2xl sm:right-24">
          <header className="flex items-center justify-between border-b border-white/10 p-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-electric-cyan">NXT Bot</p>
              <h2 className="text-lg font-black text-white">Text chat</h2>
            </div>
          </header>

          <div className="grid gap-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-3xl px-4 py-3 text-sm leading-7 ${
                  message.role === "user"
                    ? "ml-auto bg-gradient-to-r from-electric-cyan to-electric-green text-midnight"
                    : "bg-white/[0.07] text-steel-100"
                }`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {["Open location", "Book test ride", "Finance partners", "Nikhil Kumar", "Vehicle models"].map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => ask(prompt)}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-steel-100"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form onSubmit={onSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none focus:border-electric-cyan"
                placeholder="Ask about NXT Mobility..."
              />
              <button
                type="submit"
                className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-midnight"
                aria-label="Send chat message"
              >
                <Send size={18} />
              </button>
            </form>
            <div className="mt-3 flex items-center justify-between gap-3 text-xs text-steel-400">
              <span>Use the separate NXT Bot voice button to speak.</span>
              <Link href="/company-document" className="font-bold text-electric-cyan">
                Source document
              </Link>
            </div>
          </div>
        </aside>
      ) : null}
    </>
  );
}
