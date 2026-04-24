"use client";

import { motion } from "framer-motion";
import { Target, Clock, Shield } from "lucide-react";

const problems = [
  { icon: Target, title: "Everyday Struggles", description: "Millions face stress and anxiety daily without proper tools or language to process it." },
  { icon: Clock, title: "Limited Access", description: "Quality mental health support is expensive, slow, and unavailable when you need it most." },
  { icon: Shield, title: "Fear of Stigma", description: "Social pressure silences those who need help — keeping them trapped in cycles of anxiety." },
];

export default function Problem() {
  return (
    <section id="problem" className="section-padding section-border bg-black relative overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#FF2D55]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="bracket-tag inline-block mb-8">[ THE PROBLEM ]</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white mb-8">
              MENTAL<br />
              HEALTH<br />
              IS <span className="text-gradient">BROKEN.</span>
            </h2>
            <p className="text-white/40 text-xl leading-relaxed max-w-md">
              Traditional support systems fail the people who need them most — 
              leaving a massive gap that technology must bridge.
            </p>
          </motion.div>

          {/* Right — problem cards */}
          <div className="flex flex-col gap-0 border border-white/8">
            {problems.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 md:p-10 border-b border-white/8 last:border-b-0 group hover:bg-white/3 transition-colors"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 mt-1 group-hover:border-primary/40 transition-colors">
                      <Icon className="w-4 h-4 text-white/30 group-hover:text-primary-light transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="label-tag">{String(idx + 1).padStart(2, "0")}</span>
                        <h3 className="text-xl font-bold text-white">{p.title}</h3>
                      </div>
                      <p className="text-white/40 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
