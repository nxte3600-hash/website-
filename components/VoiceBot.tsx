"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  MapPinned,
  MessageCircle,
  Mic,
  MicOff,
  PhoneOff,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { RealtimeAgent, RealtimeSession, tool, type RealtimeItem } from "@openai/agents/realtime";
import { z } from "zod";
import { companyDetails } from "@/lib/companyKnowledge";
import { getVehicleById } from "@/lib/vehicles";
import {
  createWhatsAppHref,
  findLocationHref,
  nxtVoiceInstructions,
  submitVoiceLead,
  type VoiceActionResult,
  type VoiceLead,
  type VoiceSessionStatus
} from "@/lib/voiceAssistant";

type SessionCredential = {
  clientSecret?: string;
  error?: string;
};

function latestTranscript(history: RealtimeItem[], role: "user" | "assistant") {
  for (let index = history.length - 1; index >= 0; index -= 1) {
    const item = history[index];
    if (item.type !== "message" || item.role !== role) continue;

    for (const content of [...item.content].reverse()) {
      if ("transcript" in content && content.transcript) return content.transcript;
      if ("text" in content && content.text) return content.text;
    }
  }

  return "";
}

function statusCopy(status: VoiceSessionStatus) {
  switch (status) {
    case "consent":
      return "Ready for a live conversation";
    case "connecting":
      return "Connecting securely...";
    case "listening":
      return "Listening...";
    case "thinking":
      return "Thinking...";
    case "speaking":
      return "Speaking...";
    case "interrupted":
      return "You interrupted - listening";
    case "muted":
      return "Microphone muted";
    case "permission":
      return "Microphone permission required";
    case "connection-lost":
      return "Connection lost";
    case "unavailable":
      return "Voice unavailable";
    default:
      return "Voice advisor";
  }
}

function actionIcon(kind: VoiceActionResult["kind"]) {
  if (kind === "map") return <MapPinned size={15} />;
  if (kind === "whatsapp") return <MessageCircle size={15} />;
  return <ArrowUpRight size={15} />;
}

export function VoiceBot() {
  const [open, setOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [muted, setMuted] = useState(false);
  const [status, setStatus] = useState<VoiceSessionStatus>("idle");
  const [heard, setHeard] = useState("");
  const [reply, setReply] = useState("");
  const [showTranscript, setShowTranscript] = useState(false);
  const [actions, setActions] = useState<VoiceActionResult[]>([]);
  const [error, setError] = useState("");
  const sessionRef = useRef<RealtimeSession | null>(null);
  const mutedRef = useRef(false);

  const publishAction = (action: VoiceActionResult) => {
    setActions((current) => [action, ...current.filter((item) => item.id !== action.id)].slice(0, 3));
  };

  const buildTools = () => [
    tool({
      name: "show_vehicle",
      description: "Prepare a button to show an official NXT vehicle page after the visitor identifies a model.",
      parameters: z.object({ modelId: z.string().describe("Vehicle id from the supplied NXT catalog.") }),
      execute: async ({ modelId }) => {
        const vehicle = getVehicleById(modelId);
        if (!vehicle) return "That vehicle id is not in the NXT catalog. Ask which displayed NXT model they mean.";

        publishAction({
          id: `vehicle-${vehicle.id}`,
          kind: "vehicle",
          label: `View ${vehicle.name}`,
          href: `/vehicles/${vehicle.id}`,
          note: `${vehicle.name} product page is ready.`
        });
        return `A View ${vehicle.name} button is ready on screen. Invite the visitor to tap it if they want to inspect the product.`;
      }
    }),
    tool({
      name: "open_location",
      description: "Prepare a Google Maps action only after the visitor confirms the office they want to open.",
      parameters: z.object({
        locationId: z.enum(["noida", "bengaluru-rural"]),
        confirmedByUser: z.boolean()
      }),
      execute: async ({ locationId, confirmedByUser }) => {
        if (!confirmedByUser) return "Ask for confirmation before preparing an external Google Maps action.";
        const href = findLocationHref(locationId);
        if (!href) return "That office location is not available.";

        const label = locationId === "noida" ? "Open Noida map" : "Open Bengaluru map";
        publishAction({ id: `map-${locationId}`, kind: "map", label, href, note: "Google Maps link is ready." });
        return `${label} is ready on screen. Tell the visitor they may tap it to open Google Maps.`;
      }
    }),
    tool({
      name: "prepare_test_ride_lead",
      description: "Submit a confirmed test ride request after collecting and repeating all required details.",
      parameters: z.object({
        name: z.string(),
        phone: z.string(),
        city: z.string(),
        vehicleId: z.string(),
        preferredTime: z.string(),
        messageSummary: z.string(),
        confirmedByUser: z.boolean()
      }),
      execute: async ({ confirmedByUser, ...details }) => {
        if (!confirmedByUser) return "Read the test ride details back and receive confirmation before submitting.";
        const lead: VoiceLead = { intent: "test-ride", source: "voice-assistant", ...details };
        const result = await submitVoiceLead(lead);
        if (result.kind === "submitted") {
          publishAction(result);
          return "The test ride request has been submitted. Confirm that the NXT team will follow up.";
        }
        return "Online lead submission is not connected yet. Ask whether the visitor would like to continue on WhatsApp with the confirmed details.";
      }
    }),
    tool({
      name: "prepare_dealer_lead",
      description: "Submit a confirmed dealer inquiry after gathering and reading back required contact details.",
      parameters: z.object({
        name: z.string(),
        phone: z.string(),
        city: z.string(),
        company: z.string(),
        messageSummary: z.string(),
        confirmedByUser: z.boolean()
      }),
      execute: async ({ confirmedByUser, ...details }) => {
        if (!confirmedByUser) return "Read the dealership request back and receive confirmation before submitting.";
        const lead: VoiceLead = { intent: "dealer", source: "voice-assistant", ...details };
        const result = await submitVoiceLead(lead);
        if (result.kind === "submitted") {
          publishAction(result);
          return "The dealer inquiry has been submitted. Confirm that the NXT team will follow up.";
        }
        return "Online lead submission is not connected yet. Ask whether the visitor would like a WhatsApp handoff.";
      }
    }),
    tool({
      name: "open_whatsapp_handoff",
      description: "Prepare an NXT WhatsApp action only after the visitor verbally confirms the handoff.",
      parameters: z.object({
        summary: z.string().describe("Short confirmed summary suitable for an NXT WhatsApp inquiry."),
        confirmedByUser: z.boolean()
      }),
      execute: async ({ summary, confirmedByUser }) => {
        if (!confirmedByUser) return "Ask for permission before preparing the WhatsApp handoff.";

        publishAction({
          id: "whatsapp-handoff",
          kind: "whatsapp",
          label: "Continue on WhatsApp",
          href: createWhatsAppHref(summary),
          note: "Your confirmed details are ready in WhatsApp."
        });
        return "The WhatsApp button is ready. Invite the visitor to tap it to continue with NXT Mobility.";
      }
    })
  ];

  const disconnect = (keepPanel = true) => {
    sessionRef.current?.close();
    sessionRef.current = null;
    mutedRef.current = false;
    setMuted(false);
    setConnected(false);
    setStatus(keepPanel ? "consent" : "idle");
    if (!keepPanel) setOpen(false);
  };

  const startConversation = async () => {
    disconnect(true);
    setOpen(true);
    setError("");
    setActions([]);
    setHeard("");
    setReply("");
    setStatus("connecting");

    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("unavailable");
      setError("This browser cannot open a live microphone session. Please use text chat or WhatsApp.");
      return;
    }

    try {
      const credentialResponse = await fetch("/api/realtime/session", { method: "POST" });
      const credential = (await credentialResponse.json()) as SessionCredential;
      if (!credentialResponse.ok || !credential.clientSecret) {
        throw new Error(credential.error ?? "NXT Assistant could not start.");
      }

      const agent = new RealtimeAgent({
        name: "NXT Assistant",
        voice: "echo",
        instructions: nxtVoiceInstructions,
        tools: buildTools()
      });
      const session = new RealtimeSession(agent, {
        model: "gpt-realtime",
        historyStoreAudio: false,
        tracingDisabled: true,
        config: {
          outputModalities: ["audio"],
          audio: {
            input: {
              transcription: { model: "gpt-4o-mini-transcribe", language: "en" },
              noiseReduction: { type: "near_field" },
              turnDetection: {
                type: "semantic_vad",
                eagerness: "low",
                createResponse: true,
                interruptResponse: true
              }
            },
            output: { voice: "echo" }
          }
        }
      });

      sessionRef.current = session;
      session.on("agent_start", () => {
        if (!mutedRef.current) setStatus("thinking");
      });
      session.on("audio_start", () => {
        if (!mutedRef.current) setStatus("speaking");
      });
      session.on("audio_stopped", () => {
        setStatus(mutedRef.current ? "muted" : "listening");
      });
      session.on("audio_interrupted", () => {
        setStatus(mutedRef.current ? "muted" : "interrupted");
      });
      session.on("history_updated", (history) => {
        const userTranscript = latestTranscript(history, "user");
        const assistantTranscript = latestTranscript(history, "assistant");
        if (userTranscript) setHeard(userTranscript);
        if (assistantTranscript) setReply(assistantTranscript);
      });
      session.on("transport_event", (event) => {
        if (event.type === "input_audio_buffer.speech_started" && !mutedRef.current) setStatus("listening");
        if (event.type === "input_audio_buffer.speech_stopped" && !mutedRef.current) setStatus("thinking");
        if (event.type === "conversation.item.input_audio_transcription.completed" && "transcript" in event) {
          setHeard(String(event.transcript));
        }
      });
      session.on("error", () => {
        setConnected(false);
        setStatus("connection-lost");
        setError("The voice connection was interrupted. Reconnect or continue on WhatsApp.");
      });

      await session.connect({ apiKey: credential.clientSecret });
      setConnected(true);
      setStatus("listening");
      const greetingRequest = { instructions: "Begin the live conversation now with your short, friendly Hinglish greeting." };
      if (session.transport.requestResponse) session.transport.requestResponse(greetingRequest);
      else session.transport.sendEvent({ type: "response.create", response: greetingRequest });
    } catch (caught) {
      sessionRef.current?.close();
      sessionRef.current = null;
      setConnected(false);
      const message = caught instanceof Error ? caught.message : "NXT Assistant could not start.";
      if (/permission|notallowed|not allowed|denied|microphone/i.test(message)) {
        setStatus("permission");
        setError("Allow microphone access to speak with NXT Assistant.");
      } else {
        setStatus("unavailable");
        setError(message);
      }
    }
  };

  const toggleMute = () => {
    const nextMuted = !mutedRef.current;
    try {
      sessionRef.current?.mute(nextMuted);
      mutedRef.current = nextMuted;
      setMuted(nextMuted);
      setStatus(nextMuted ? "muted" : "listening");
    } catch {
      setError("Microphone control is temporarily unavailable.");
    }
  };

  useEffect(() => {
    return () => sessionRef.current?.close();
  }, []);

  return (
    <>
      {!open ? (
        <motion.button
          type="button"
          onClick={() => {
            setOpen(true);
            setStatus("consent");
          }}
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ y: -2 }}
          className="fixed bottom-5 right-5 z-[72] inline-flex h-16 items-center gap-3 rounded-full border border-electric-cyan/30 bg-midnight/90 px-5 font-black text-white shadow-glow backdrop-blur-xl"
          aria-label="Talk to NXT Assistant"
        >
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-electric-cyan text-midnight">
            <span className="absolute inset-0 animate-ping rounded-full bg-electric-cyan/35" />
            <Mic className="relative" size={20} />
          </span>
          <span className="hidden sm:inline">Talk to NXT</span>
        </motion.button>
      ) : null}

      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            className="fixed inset-x-3 bottom-24 z-[73] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#061222]/95 shadow-panel backdrop-blur-2xl sm:inset-x-auto sm:right-4 sm:w-[390px]"
          >
            <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="relative grid h-12 w-12 place-items-center rounded-full bg-electric-cyan/12 text-electric-cyan">
                  {connected && status !== "muted" ? (
                    <span className="absolute inset-0 animate-pulse rounded-full border border-electric-cyan/35" />
                  ) : null}
                  {status === "muted" ? <MicOff size={22} /> : <Mic size={22} />}
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-electric-cyan">NXT Assistant</p>
                  <p className="text-sm font-bold text-white">{statusCopy(status)}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => disconnect(false)}
                className="grid h-10 w-10 place-items-center rounded-full text-steel-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close NXT Assistant"
              >
                <X size={21} />
              </button>
            </header>

            {!connected ? (
              <div className="space-y-5 p-5">
                <div className="rounded-2xl border border-electric-cyan/15 bg-electric-cyan/[0.07] p-4">
                  <div className="mb-3 flex items-center gap-2 text-electric-green">
                    <ShieldCheck size={17} />
                    <p className="text-xs font-black uppercase tracking-[0.16em]">Live voice privacy</p>
                  </div>
                  <p className="text-sm leading-7 text-steel-100">
                    Talk naturally in Hinglish, Hindi, or English. Audio is used for this live conversation and is not
                    stored by this website by default.
                  </p>
                </div>
                {error ? (
                  <p className="rounded-2xl border border-electric-green/20 bg-electric-green/10 p-4 text-sm leading-6 text-steel-100">
                    {error}
                  </p>
                ) : null}
                <button
                  type="button"
                  onClick={startConversation}
                  disabled={status === "connecting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-black text-midnight transition disabled:cursor-wait disabled:opacity-65"
                >
                  {status === "connecting" ? <RefreshCw className="animate-spin" size={18} /> : <Mic size={18} />}
                  {status === "connecting" ? "Connecting..." : "Allow Mic & Start Talking"}
                </button>
                <div className="flex items-center justify-center gap-4 text-xs font-bold text-steel-400">
                  <a href={companyDetails.whatsappUrl} target="_blank" rel="noreferrer" className="text-electric-green">
                    Use WhatsApp
                  </a>
                  <span>or use text chat</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 p-5">
                <div className="flex h-20 items-center justify-center gap-2 rounded-2xl bg-white/[0.04]">
                  {[20, 36, 54, 30, 64, 40, 24].map((height, index) => (
                    <motion.span
                      key={height}
                      animate={
                        status === "speaking" || status === "listening"
                          ? { height: [16, height, 18], opacity: [0.45, 1, 0.45] }
                          : { height: 16, opacity: 0.35 }
                      }
                      transition={{ duration: 0.75, repeat: Infinity, delay: index * 0.07 }}
                      className="w-1.5 rounded-full bg-gradient-to-t from-electric-green to-electric-cyan"
                    />
                  ))}
                </div>

                {actions.length ? (
                  <div className="flex flex-wrap gap-2">
                    {actions.map((action) =>
                      action.href ? (
                        <a
                          key={action.id}
                          href={action.href}
                          target={action.href.startsWith("http") ? "_blank" : undefined}
                          rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                          className="inline-flex items-center gap-2 rounded-full border border-electric-cyan/20 bg-electric-cyan/10 px-4 py-2.5 text-xs font-black text-electric-cyan"
                        >
                          {actionIcon(action.kind)}
                          {action.label}
                        </a>
                      ) : (
                        <span
                          key={action.id}
                          className="inline-flex items-center gap-2 rounded-full border border-electric-green/20 bg-electric-green/10 px-4 py-2.5 text-xs font-black text-electric-green"
                        >
                          <Sparkles size={15} />
                          {action.label}
                        </span>
                      )
                    )}
                  </div>
                ) : null}

                <button
                  type="button"
                  onClick={() => setShowTranscript((value) => !value)}
                  className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-steel-100"
                >
                  Live transcript
                  {showTranscript ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                <AnimatePresence>
                  {showTranscript ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid gap-3 overflow-hidden"
                    >
                      <div className="rounded-2xl bg-white/[0.05] p-4">
                        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-steel-400">You said</p>
                        <p className="mt-2 text-sm leading-6 text-white">{heard || "Listening for your question..."}</p>
                      </div>
                      <div className="rounded-2xl bg-electric-cyan/[0.08] p-4">
                        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-electric-green">
                          NXT Assistant
                        </p>
                        <p className="mt-2 text-sm leading-6 text-steel-100">{reply || "Ready to help."}</p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                {error ? <p className="text-sm leading-6 text-electric-green">{error}</p> : null}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 font-black text-white"
                  >
                    {muted ? <Mic size={18} /> : <MicOff size={18} />}
                    {muted ? "Unmute" : "Mute"}
                  </button>
                  <button
                    type="button"
                    onClick={() => disconnect(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 font-black text-midnight"
                  >
                    <PhoneOff size={18} /> End
                  </button>
                </div>
                {status === "connection-lost" ? (
                  <button
                    type="button"
                    onClick={startConversation}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-electric-cyan/25 px-4 py-3 font-black text-electric-cyan"
                  >
                    <RefreshCw size={17} /> Reconnect
                  </button>
                ) : null}
              </div>
            )}
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
