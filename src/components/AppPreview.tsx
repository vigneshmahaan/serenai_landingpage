"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, User, MoreHorizontal } from "lucide-react";

type Message = { id: number; text: string; sender: "ai" | "user" };

const AI_REPLIES = [
  "I hear you. Thank you for trusting me with that. Let's explore this together — what feels most overwhelming right now?",
  "That's completely valid. Many high-performers experience this. Your awareness is already a huge first step forward.",
  "I understand. Let's take a breath first. Would you like to try a 60-second grounding technique, or would you prefer to keep talking?",
  "You're not alone in this. Based on what you're sharing, I'd like to suggest a few things that might help immediately.",
];

export default function AppPreview() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Welcome back. I'm here and fully present. How are you feeling today?", sender: "ai" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [replyIdx, setReplyIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const reply: Message = {
        id: Date.now() + 1,
        text: AI_REPLIES[replyIdx % AI_REPLIES.length],
        sender: "ai",
      };
      setMessages((prev) => [...prev, reply]);
      setReplyIdx((i) => i + 1);
    }, 1600);
  };

  return (
    <section id="demo" className="section-padding section-border bg-black relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#6C5CE7]/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="bracket-tag inline-block mb-8">[ LIVE DEMO ]</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white mb-8">
              TALK TO<br />
              <span className="text-gradient">SERENAI</span><br />
              RIGHT NOW.
            </h2>
            <p className="text-white/40 text-xl leading-relaxed max-w-md">
              Type anything — how you're feeling, a problem you're facing, or just "hello." 
              SerenAI responds with genuine empathy.
            </p>
          </motion.div>

          {/* Right — Chat UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-white/8 flex flex-col overflow-hidden"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-gradient flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">SERENAI</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="label-tag">ONLINE</span>
                  </div>
                </div>
              </div>
              <MoreHorizontal className="w-5 h-5 text-white/20" />
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="h-80 overflow-y-auto flex flex-col gap-4 p-6 bg-black/60">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`flex items-end gap-3 ${msg.sender === "user" ? "justify-end" : ""}`}
                  >
                    {msg.sender === "ai" && (
                      <div className="w-6 h-6 bg-primary-gradient flex items-center justify-center shrink-0">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                        msg.sender === "ai"
                          ? "bg-white/5 border border-white/8 text-white/80"
                          : "bg-primary text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.sender === "user" && (
                      <div className="w-6 h-6 border border-white/20 flex items-center justify-center shrink-0">
                        <User className="w-3 h-3 text-white/40" />
                      </div>
                    )}
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-end gap-3"
                  >
                    <div className="w-6 h-6 bg-primary-gradient flex items-center justify-center shrink-0">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-white/5 border border-white/8 px-4 py-3 flex gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary-light rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-primary-light rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-primary-light rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="border-t border-white/8 flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type how you're feeling..."
                className="flex-1 bg-transparent px-6 py-4 text-white text-sm placeholder:text-white/20 outline-none"
              />
              <button
                onClick={handleSend}
                className="w-14 h-14 bg-primary flex items-center justify-center hover:bg-primary-light transition-colors shrink-0"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
