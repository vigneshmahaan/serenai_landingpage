"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-padding section-border bg-black relative overflow-hidden">
      {/* Large glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-[#6C5CE7]/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="bracket-tag inline-block mb-10">[ START TODAY ]</span>
          <h2 className="text-[clamp(3rem,10vw,10rem)] font-bold leading-[0.85] tracking-tighter text-white mb-12">
            INVEST IN<br />
            YOUR<br />
            <span className="text-gradient">MIND.</span>
          </h2>
          <p className="text-white/40 text-xl max-w-lg mx-auto mb-14 leading-relaxed">
            Join thousands scaling their emotional intelligence with the world's most advanced AI companion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group flex items-center gap-3 px-12 py-5 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-all">
              GET STARTED FREE
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="px-12 py-5 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:border-white/50 transition-all">
              BOOK A DEMO
            </button>
          </div>
        </motion.div>

        {/* Bottom divider line */}
        <div className="mt-24 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/8" />
          <span className="label-tag">SERENAI © 2026</span>
          <div className="flex-1 h-px bg-white/8" />
        </div>
      </div>
    </section>
  );
}
