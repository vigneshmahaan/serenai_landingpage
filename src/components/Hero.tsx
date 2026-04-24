"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import DemoModal from "./DemoModal";
import VideoModal from "./VideoModal";

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Transforms for parallax
  const bgX = useTransform(springX, [-500, 500], [20, -20]);
  const bgY = useTransform(springY, [-500, 500], [20, -20]);

  const textX = useTransform(springX, [-500, 500], [15, -15]);
  const textY = useTransform(springY, [-500, 500], [8, -8]);
  const textSkewX = useTransform(springX, [-500, 500], [-2, 2]);
  const textSkewY = useTransform(springY, [-500, 500], [-1, 1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-24"
    >
      {/* Interactive Background Glow */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 pointer-events-none opacity-60"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#6C5CE7]/10 blur-[150px]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF2D55]/10 blur-[100px]" />
      </motion.div>

      {/* Floating Elements (Plus signs) */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && [...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0.5, 1, 0.5],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: 3 + Math.random() * 2
            }}
            className="absolute text-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Plus className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ x: textX, y: textY, skewX: textSkewX, skewY: textSkewY }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="flex justify-center mb-10"
        >
          <span className="bracket-tag inline-flex items-center gap-2">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-light rounded-full"
            />
            [ AI MENTAL HEALTH COMPANION ]
          </span>
        </motion.div>

        {/* Main heading with split reveal feel */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 3.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.5rem,12vw,10rem)] font-bold leading-[0.85] tracking-tighter text-white"
          >
            FEEL
            <br />
            <span className="text-gradient">BETTER</span>
            <br />
            <span className="text-white/20">NOW.</span>
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.5 }}
          className="max-w-xl mx-auto text-white/40 text-lg md:text-xl font-medium leading-relaxed mb-14"
        >
          SerenAI is your private, always-on emotional intelligence companion —
          built for the modern age of mental performance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setDemoOpen(true)}
            className="group relative flex items-center gap-3 px-12 py-5 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              START FREE
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            />
          </button>
          <button
            onClick={() => setVideoOpen(true)}
            className="flex items-center gap-3 px-12 py-5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:border-white/40 transition-all hover:bg-white/5"
          >
            WATCH PITCH
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2, duration: 1 }}
          className="mt-32 grid grid-cols-3 max-w-lg mx-auto border-t border-white/10"
        >
          {[
            { val: "24/7", label: "Available" },
            { val: "100%", label: "Private" },
            { val: "10K+", label: "Users" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.4 + (i * 0.1) }}
              className="pt-8 px-4 text-center border-r last:border-r-0 border-white/10"
            >
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.val}</p>
              <p className="label-tag opacity-40">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.8 }}
        className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-10 items-center"
      >
        <div className="flex flex-col gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-px h-1 bg-white/20" />
          ))}
        </div>
        <span className="label-tag -rotate-90 origin-center whitespace-nowrap">SCROLL</span>
      </motion.div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
