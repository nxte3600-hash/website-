"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Headphones, MessageCircle, Mic, Pause, Play, RotateCcw, Send, X } from "lucide-react";
import { answerFromCompanyKnowledge, companyDetails } from "@/lib/companyKnowledge";

type Panel = "menu" | "chat" | "voice";
type VoiceState = "idle" | "permission" | "listening" | "processing" | "paused" | "replay" | "error";
type ChatMessage = { role: "bot" | "user"; text: string };

const starter: ChatMessage = {
  role: "bot",
  text: "Namaste. I can help compare NXTE vehicles, book a test ride, route dealership and fleet enquiries, explain finance, service and human handoff."
};

const prompts = ["Compare models", "Book test ride", "Dealer enquiry", "Fleet enquiry", "Finance support", "Service help", "Human handoff"];

export function AssistantDock() {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<Panel>("menu");
  const [messages, setMessages] = useState<ChatMessage[]>([starter]);
  const [input, setInput] = useState("");
  const [voiceState, setVoiceState] = useState<VoiceState>("idle");
  const [transcript, setTranscript] = useState("Voice assistant is disconnected until microphone permission is granted.");
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, panel]);

  function ask(text: string) {
    const cleaned = text.trim();
    if (!cleaned) return;
    setMessages((current) => [...current, { role: "user", text: cleaned }, { role: "bot", text: answerFromCompanyKnowledge(cleaned) }]);
    setInput("");
  }

  async function startVoice() {
    setVoiceState("permission");
    try {
      if (!navigator.mediaDevices?.getUserMedia) throw new Error("Microphone is unavailable in this browser.");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());
      setVoiceState("listening");
      setTranscript("Listening demo state. Speak your vehicle, test ride, dealer, fleet, finance or service question. Backend speech processing is not connected yet.");
      window.setTimeout(() => setVoiceState("processing"), 1200);
      window.setTimeout(() => setVoiceState("replay"), 2200);
    } catch {
      setVoiceState("error");
      setTranscript("Microphone permission was not granted or is unavailable. Switch to text chat for the same help topics.");
    }
  }

  return (
    <div className="fixed bottom-5 right-4 z-[80] sm:right-6">
      {open ? (
        <aside className="mb-4 max-h-[calc(100vh-7rem)] w-[calc(100vw-2rem)] max-w-[430px] overflow-hidden rounded-2xl border border-white/16 bg-[var(--nxte-navy)] text-white shadow-2xl" aria-label="NXTE assistant">
          <header className="flex items-center justify-between border-b border-white/12 p-4">
            <div>
              <p className="nxte-kicker">Always available</p>
              <h2 className="nxte-display text-xl font-bold">NXTE Assist</h2>
            </div>
            <button type="button" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10" onClick={() => setOpen(false)} aria-label="Close assistant">
              <X size={18} />
            </button>
          </header>

          <div className="grid grid-cols-3 border-b border-white/12 text-sm font-bold">
            {(["menu", "chat", "voice"] as Panel[]).map((item) => (
              <button key={item} type="button" className={`px-3 py-3 capitalize ${panel === item ? "bg-white text-[var(--nxte-navy)]" : "text-white/74"}`} onClick={() => setPanel(item)}>
                {item === "menu" ? "Start" : item}
              </button>
            ))}
          </div>

          {panel === "menu" ? (
            <div className="grid gap-3 p-4">
              <a className="nxte-button nxte-button-primary justify-start" href={companyDetails.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp +91-9289484831
              </a>
              <button type="button" className="nxte-button nxte-button-on-dark justify-start" onClick={() => setPanel("chat")}>
                <Send size={18} /> NXTE Text Chat
              </button>
              <button type="button" className="nxte-button nxte-button-on-dark justify-start" onClick={() => setPanel("voice")}>
                <Mic size={18} /> NXTE Voice Assistant
              </button>
              <p className="text-xs leading-5 text-white/58">Demo assistant states are shown honestly when backend voice APIs are not connected.</p>
            </div>
          ) : null}

          {panel === "chat" ? (
            <div className="flex max-h-[62vh] flex-col">
              <div className="grid gap-3 overflow-y-auto p-4">
                {messages.map((message, index) => (
                  <div key={`${message.role}-${index}`} className={`max-w-[88%] rounded-xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "ml-auto bg-[var(--nxte-orange)] text-white" : "bg-white/10 text-white"}`}>
                    {message.text}
                  </div>
                ))}
                <div ref={endRef} />
              </div>
              <div className="border-t border-white/12 p-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  {prompts.map((prompt) => (
                    <button key={prompt} type="button" className="rounded-full border border-white/16 px-3 py-2 text-xs font-bold text-white/82" onClick={() => ask(prompt)}>
                      {prompt}
                    </button>
                  ))}
                </div>
                <form onSubmit={(event: FormEvent<HTMLFormElement>) => { event.preventDefault(); ask(input); }} className="flex gap-2">
                  <label className="sr-only" htmlFor="assistant-message">Ask NXTE text chat</label>
                  <input id="assistant-message" value={input} onChange={(event) => setInput(event.target.value)} className="min-w-0 flex-1 rounded-lg border border-white/16 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/46" placeholder="Ask about vehicles, finance or service" />
                  <button className="grid h-12 w-12 place-items-center rounded-lg bg-white text-[var(--nxte-navy)]" type="submit" aria-label="Send message">
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          ) : null}

          {panel === "voice" ? (
            <div className="grid gap-4 p-4">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-white/60">Voice state</p>
                <p className="mt-2 text-lg font-extrabold capitalize">{voiceState}</p>
                <p className="mt-3 text-sm leading-6 text-white/74">{transcript}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="nxte-button nxte-button-primary" type="button" onClick={startVoice}><Mic size={17} /> Start</button>
                <button className="nxte-button nxte-button-on-dark" type="button" onClick={() => setVoiceState("paused")}><Pause size={17} /> Pause</button>
                <button className="nxte-button nxte-button-on-dark" type="button" onClick={() => setVoiceState("replay")}><Play size={17} /> Replay</button>
                <button className="nxte-button nxte-button-on-dark" type="button" onClick={() => { setVoiceState("idle"); setTranscript("Voice session cancelled. You can restart or switch to text chat."); }}><RotateCcw size={17} /> Cancel</button>
              </div>
              <button type="button" className="text-left text-sm font-bold text-white underline underline-offset-4" onClick={() => setPanel("chat")}>
                Switch to text chat
              </button>
            </div>
          ) : null}
        </aside>
      ) : null}

      <button
        type="button"
        onClick={() => { setOpen((value) => !value); setPanel("menu"); }}
        className="grid h-16 w-16 place-items-center rounded-2xl bg-[var(--nxte-orange)] text-white shadow-[0_18px_45px_rgba(243,108,33,0.28)]"
        aria-expanded={open}
        aria-label="Open WhatsApp, text chat and voice assistant"
      >
        {open ? <X size={24} /> : <Headphones size={25} />}
      </button>
    </div>
  );
}
