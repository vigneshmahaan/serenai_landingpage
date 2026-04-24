"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Solution() {
  return (
    <section className="section-padding section-border bg-black relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#6C5CE7]/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative border border-white/8 overflow-hidden"
          >
            <Image
              src="/solution_mockup_v2.png"
              alt="SerenAI Interface"
              width={600}
              height={500}
              className="w-full h-auto grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6C5CE7]/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="bracket-tag inline-block mb-8">[ THE SOLUTION ]</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white mb-8">
              INSTANT.<br />
              PRIVATE.<br />
              <span className="text-gradient">POWERFUL.</span>
            </h2>
            <p className="text-white/40 text-xl leading-relaxed max-w-md mb-10">
              SerenAI delivers multi-modal emotional intelligence — combining text, voice, and visual cues 
              into a single, private, always-on support system.
            </p>
            <button className="group flex items-center gap-3 text-white font-bold text-sm tracking-widest uppercase border-b border-white/20 pb-2 hover:border-primary-light hover:text-primary-light transition-all">
              EXPLORE THE PLATFORM
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
