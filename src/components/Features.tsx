"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Mic, Camera, Stethoscope, FileText, LineChart, Heart } from "lucide-react";

const features = [
  { icon: MessageSquareText, title: "AI Chat Support", description: "Real-time empathetic conversations available anytime you need to express yourself." },
  { icon: Mic, title: "Voice Interaction", description: "Talk naturally — SerenAI listens, responds, and adapts to your vocal tone." },
  { icon: Camera, title: "Emotion Detection", description: "Privacy-first facial analysis to detect subtle emotional cues and respond accordingly." },
  { icon: Stethoscope, title: "Therapist Integration", description: "Bridge to certified mental health professionals when you need human-level support." },
  { icon: FileText, title: "Mental Health Insights", description: "Deep personalized reports and emotional trend analytics to track your growth." },
  { icon: LineChart, title: "Mood Tracking", description: "Visualize your emotional journey with intelligent pattern recognition." },
  { icon: Heart, title: "Wellness Activities", description: "Guided breathing, journaling prompts, and mindfulness routines built for you." },
];

export default function Features() {
  return (
    <section id="features" className="section-padding section-border relative bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bracket-tag inline-block mb-6">[ CAPABILITIES ]</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white">
              WHAT<br />
              <span className="text-gradient">SERENAI</span><br />
              DOES.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg max-w-xs leading-relaxed"
          >
            A complete suite of emotional intelligence tools — designed for high-performance living.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
          {features.map((f, idx) => {
            const Icon = f.icon;
            const isLast = idx === features.length - 1;
            const isLoneInRow = isLast && features.length % 3 === 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ backgroundColor: "rgba(108,92,231,0.06)" }}
                className={`bg-black p-10 flex flex-col gap-6 cursor-default transition-colors duration-300 group ${
                  isLoneInRow ? "lg:col-span-3 lg:flex-row lg:items-center lg:gap-20" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Icon className="w-5 h-5 text-white/50 group-hover:text-primary-light transition-colors" />
                  </div>
                  <span className="label-tag">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-white/40 leading-relaxed">{f.description}</p>
                </div>
                <div className="mt-auto w-0 h-px bg-primary-gradient group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
