"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc = "/demo.mp4" }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-black border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 border border-white/10 bg-black/50 flex items-center justify-center text-white hover:border-white/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Player */}
          <video
            autoPlay
            controls
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>

          {/* Technical Overlay Decor */}
          <div className="absolute bottom-6 left-6 pointer-events-none">
            <span className="label-tag text-white/40">[ SALES_PITCH: ACTIVE ]</span>
          </div>
          <div className="absolute top-6 left-6 pointer-events-none">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="label-tag text-white/40">REC_STREAM_01</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
