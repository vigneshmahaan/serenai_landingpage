"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-6">
      <CustomCursor />
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6C5CE7]/10 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12 inline-flex items-center justify-center w-20 h-20 border border-white/10 bg-white/5"
        >
          <Sparkles className="w-8 h-8 text-white/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bracket-tag mb-6 block">[ FEATURE IN DEVELOPMENT ]</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8">
            COMING<br />
            <span className="text-gradient">SOON.</span>
          </h1>
          <p className="text-white/40 text-xl leading-relaxed mb-12">
            We are meticulously crafting this experience to meet the highest standards of emotional intelligence. 
            Stay tuned for the launch of the next generation of mental performance tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO SAFETY
          </Link>
        </motion.div>
      </div>

      {/* Footer hint */}
      <div className="absolute bottom-10 text-center">
        <p className="label-tag opacity-20">SERENAI_INTELLIGENCE // PROTOCOL_V1</p>
      </div>
    </main>
  );
}
