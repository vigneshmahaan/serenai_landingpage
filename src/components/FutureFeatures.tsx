"use client";

import { motion } from "framer-motion";
import { HandMetal, Volume2, Sparkles, Stethoscope, FileText, Globe2, Lightbulb } from "lucide-react";

const futureFeatures = [
  {
    icon: <Lightbulb className="w-8 h-8 text-amber-400" />,
    title: "Personalized Therapy Plans",
    description: "AI-generated routines based on user behavior and mood."
  },
  {
    icon: <HandMetal className="w-8 h-8 text-indigo-400" />,
    title: "Sign Language Support",
    description: "Enable speech-impaired users to communicate via gestures."
  },
  {
    icon: <Volume2 className="w-8 h-8 text-blue-400" />,
    title: "Full Voice Mode",
    description: "Complete voice-based experience for visually impaired users."
  },
  {
    icon: <Globe2 className="w-8 h-8 text-purple-400" />,
    title: "Multilingual Support",
    description: "Support multiple languages for wider accessibility."
  }
];

export default function FutureFeatures() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-foreground text-background -z-20 skew-y-3 transform origin-bottom-left" />
      <div className="absolute inset-0 bg-foreground text-background -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>The Roadmap</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white"
          >
            Coming Soon
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70"
          >
            We are continuously working to make SerenAI more accessible, inclusive, and deeply integrated into your mental healthcare journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {futureFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-2xl shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
