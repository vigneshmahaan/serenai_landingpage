"use client";

import { motion } from "framer-motion";
import { Clock, Shield, ThumbsUp, Accessibility, MessageSquare } from "lucide-react";

const benefits = [
  {
    icon: <MessageSquare className="w-10 h-10 text-orange-500" />,
    title: "Multimodal AI",
    description: "Support across text, voice, and video interactions."
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-500" />,
    title: "24/7 Availability",
    description: "Support whenever you need it, day or night. No appointments required."
  },
  {
    icon: <Shield className="w-10 h-10 text-purple-500" />,
    title: "Privacy First",
    description: "Your conversations are completely secure and private."
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-emerald-500" />,
    title: "Simple & User-Friendly",
    description: "A clean, intuitive interface that feels natural to use."
  },
  {
    icon: <Accessibility className="w-10 h-10 text-rose-500" />,
    title: "Designed for Everyone",
    description: "Built to be fully inclusive for every background and ability."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding relative bg-blue-50/30 dark:bg-slate-900/30 border-y border-foreground/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Why SerenAI
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="mb-6 p-4 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-foreground/5 inline-flex justify-center items-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
