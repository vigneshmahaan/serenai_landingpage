"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Subtle background glow that pulses */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
          />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: [0.5, 1, 40],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.8,
              times: [0, 0.2, 0.8, 1],
              ease: "easeInOut"
            }}
            className="relative z-10 flex flex-col items-center"
          >
            <Image
              src="/logo3.png"
              alt="SerenAI"
              width={400}
              height={150}
              className="h-20 md:h-28 w-auto object-contain invert" // Added invert to make black logo white
              priority
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ delay: 0.2, duration: 2, times: [0, 0.1, 0.9, 1] }}
              className="mt-6 label-tag text-white/60 tracking-[0.4em] text-[10px]"
            >
              INITIALIZING NEURAL LINK
            </motion.div>
          </motion.div>

          {/* Animated border lines that shrink into the center */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: "circIn" }}
            className="absolute top-0 left-0 w-full h-[1px] bg-white/20 origin-left"
          />
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: "circIn" }}
            className="absolute bottom-0 right-0 w-full h-[1px] bg-white/20 origin-right"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
