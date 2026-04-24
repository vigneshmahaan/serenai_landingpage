"use client";

import { motion } from "framer-motion";

export default function Value() {
  return (
    <section className="section-padding section-border bg-black relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[300px] bg-[#6C5CE7]/8 blur-[120px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="bracket-tag inline-block mb-10">[ THE STANDARD ]</span>
          <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter text-white">
            EMOTIONAL INTELLIGENCE<br />
            <span className="text-gradient">IS YOUR EDGE.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
