"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, EyeOff, Fingerprint } from "lucide-react";

const items = [
  { icon: EyeOff, text: "Zero-Knowledge Encryption" },
  { icon: Fingerprint, text: "Anonymous by Default" },
  { icon: Lock, text: "End-to-End Encrypted" },
  { icon: ShieldCheck, text: "Global Compliance Standards" },
];

export default function Privacy() {
  return (
    <section className="section-padding section-border bg-black relative overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#6C5CE7]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="bracket-tag inline-block mb-8">[ SECURITY ]</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white mb-8">
              YOUR DATA<br />
              STAYS<br />
              <span className="text-gradient">YOURS.</span>
            </h2>
            <p className="text-white/40 text-xl leading-relaxed max-w-md">
              We built SerenAI with privacy as the foundation — not as an afterthought. 
              Your emotional data is mathematically guaranteed to be yours alone.
            </p>
          </motion.div>

          {/* Right — privacy list */}
          <div className="flex flex-col gap-0 border border-white/8">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 border-b border-white/8 last:border-b-0 flex items-center gap-6 group hover:bg-white/3 transition-colors"
                >
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                    <Icon className="w-4 h-4 text-white/40 group-hover:text-primary-light transition-colors" />
                  </div>
                  <span className="text-white font-bold text-lg">{item.text}</span>
                  <div className="ml-auto w-4 h-px bg-white/20 group-hover:w-8 group-hover:bg-primary-light transition-all duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
