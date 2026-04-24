"use client";

import { motion } from "framer-motion";
import { MessageCircleHeart, BrainCircuit, Sparkles } from "lucide-react";

const steps = [
  { icon: MessageCircleHeart, num: "01", title: "Share how you feel", description: "Open up freely — through text, voice, or facial cues. No judgment. No pressure." },
  { icon: BrainCircuit, num: "02", title: "SerenAI understands", description: "Advanced AI analyzes your emotional state with multi-modal intelligence and deep empathy." },
  { icon: Sparkles, num: "03", title: "Get personalized support", description: "Instant guidance, tailored wellness activities, or direct bridge to a certified therapist." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding section-border bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="bracket-tag inline-block mb-8">[ THE PROCESS ]</span>
          <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white">
            THREE<br />
            STEPS<br />
            TO <span className="text-gradient">CLARITY.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0 border border-white/8 divide-y md:divide-y-0 md:divide-x divide-white/8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="p-10 md:p-14 flex flex-col gap-8 group hover:bg-white/3 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                    <Icon className="w-5 h-5 text-white/40 group-hover:text-primary-light transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/40 leading-relaxed">{step.description}</p>
                </div>
                <div className="w-0 h-px bg-primary-gradient group-hover:w-full transition-all duration-700 mt-auto" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
