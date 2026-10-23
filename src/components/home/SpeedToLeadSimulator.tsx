"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Bot, User, CheckCheck, Clock, Sparkles } from "lucide-react";

interface MockMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  time: string;
}

export function SpeedToLeadSimulator() {
  const [messages, setMessages] = useState<MockMessage[]>([
    {
      id: "1",
      sender: "user",
      text: "Hi, I saw your clinic online. Can I book a consultation for teeth alignment?",
      time: "8:32 PM",
    },
    {
      id: "2",
      sender: "bot",
      text: "Hello! 👋 Thanks for reaching out to Sai Dental & Skin Clinic. We’d love to help you with teeth alignment.",
      time: "8:32 PM",
    },
    {
      id: "3",
      sender: "bot",
      text: "Dr. Ramesh has 2 consultation slots open tomorrow. Which time suits you best?\n\n1️⃣ 11:30 AM\n2️⃣ 4:00 PM\n3️⃣ 6:30 PM",
      time: "8:32 PM",
    },
  ]);

  const [hasBooked, setHasBooked] = useState(false);

  const handleSlotSelect = (slotText: string) => {
    if (hasBooked) return;
    setHasBooked(true);

    const userReply: MockMessage = {
      id: String(Date.now()),
      sender: "user",
      text: slotText,
      time: "8:33 PM",
    };

    setMessages((prev) => [...prev, userReply]);

    setTimeout(() => {
      const botConfirmation: MockMessage = {
        id: String(Date.now() + 1),
        sender: "bot",
        text: `✅ Confirmed for tomorrow at ${slotText}!\n\n📍 Clinic Address: Road No. 36, Jubilee Hills.\n🔔 You'll receive a reminder 2 hours before your appointment.`,
        time: "8:33 PM",
      };
      setMessages((prev) => [...prev, botConfirmation]);
    }, 1000);
  };

  return (
    <section className="py-20 md:py-28 bg-background border-b border-bg-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-4 text-xs font-bold tracking-wide uppercase text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5" />
              Live Interactive Simulation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.15]">
              Experience what an <span className="text-emerald-600">instant 6-second</span> response feels like.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed">
              When a lead inquires on your website or Meta Ads, our official WhatsApp AI agent engages them instantly, answers questions, and locks in appointments before they open Google to search for competitors.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-text-primary font-medium">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  ✓
                </div>
                <span>Official Meta Cloud API — Zero risk of number bans</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-primary font-medium">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  ✓
                </div>
                <span>Connects seamlessly with Google Calendar, Cal.com & your CRM</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-primary font-medium">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  ✓
                </div>
                <span>Founder receives real-time Telegram alert with 1-tap wa.me link</span>
              </div>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[380px] bg-slate-900 rounded-[40px] p-3 shadow-2xl border-4 border-slate-800">
              {/* Phone Top Bar */}
              <div className="h-6 w-full flex justify-between items-center px-6 text-[10px] text-slate-400">
                <span>8:33 PM</span>
                <div className="w-16 h-4 bg-slate-800 rounded-full" />
                <span>5G 98%</span>
              </div>

              {/* Chat Header */}
              <div className="bg-emerald-700 px-4 py-3 rounded-t-2xl flex items-center gap-3 text-white">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                  SL
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">Sai Clinic Assistant</div>
                  <div className="text-[10px] text-emerald-200">Online · Instant Reply</div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="bg-[#EFEAE2] p-4 h-[340px] overflow-y-auto space-y-3 rounded-b-2xl">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed shadow-sm ${
                        m.sender === "user"
                          ? "bg-[#D9FDD3] text-slate-800 rounded-tr-none"
                          : "bg-white text-slate-800 rounded-tl-none whitespace-pre-line"
                      }`}
                    >
                      {m.text}
                      <div className="text-[9px] text-slate-400 text-right mt-1 flex items-center justify-end gap-1">
                        {m.time}
                        {m.sender === "user" && <CheckCheck className="w-3 h-3 text-blue-500" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions (Tap buttons) */}
              <div className="p-3 bg-slate-950 rounded-2xl mt-2">
                <div className="text-[11px] text-slate-400 mb-2 font-medium text-center">
                  {hasBooked ? "Appointment Confirmed in Google Calendar" : "Tap to pick a slot as a patient:"}
                </div>
                {!hasBooked && (
                  <div className="grid grid-cols-3 gap-1.5">
                    {["11:30 AM", "4:00 PM", "6:30 PM"].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => handleSlotSelect(slot)}
                        className="py-1.5 px-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-colors"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
