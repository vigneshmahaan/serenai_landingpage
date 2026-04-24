"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Heart, Brain, User } from "lucide-react";
import Image from "next/image";

export default function DemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", age: "", mood: "", sleep: "", energy: "" });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const reset = () => {
    setStep(1);
    setFormData({ name: "", age: "", mood: "", sleep: "", energy: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={reset}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal — dark Trivolve style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          className="relative w-full max-w-xl max-h-[90vh] bg-[#0A0A0A] border border-white/10 overflow-y-auto"
        >
          {/* Progress bar */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
              className="h-full bg-primary-gradient"
            />
          </div>

          {/* Step indicator + close */}
          <div className="flex items-center justify-between px-8 pt-8 pb-4">
            <span className="label-tag">[ STEP {step} OF {totalSteps} ]</span>
            <button
              onClick={reset}
              className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-white/40 transition-colors"
            >
              <X className="w-4 h-4 text-white/60" />
            </button>
          </div>

          <div className="px-8 pb-10">
            <AnimatePresence mode="wait">

              {/* Step 1 — Personal Info */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <div className="mb-6">
                      <Image 
                        src="/logo2.png" 
                        alt="SerenAI" 
                        width={160} 
                        height={45} 
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                      WELCOME TO THE FUTURE.
                    </h3>
                    <p className="text-white/40">
                      Quick setup to personalize your experience.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="label-tag block mb-2">YOUR NAME</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full pl-11 pr-5 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="label-tag block mb-2">YOUR AGE</label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="Enter your age"
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 border border-white/8 bg-white/3">
                    <ShieldCheck className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                    <p className="text-white/40 text-sm">
                      Your data is encrypted and legally protected. We never store or sell it.
                    </p>
                  </div>

                  <button
                    disabled={!formData.name || !formData.age}
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-all disabled:opacity-30"
                  >
                    START ASSESSMENT
                  </button>
                </motion.div>
              )}

              {/* Step 2 — Mood */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-2 text-primary-light">
                    <Heart className="w-4 h-4" />
                    <span className="label-tag">EMOTIONAL STATE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                    How have you been feeling lately?
                  </h3>

                  <div className="grid grid-cols-2 gap-2">
                    {["Peaceful", "Anxious", "Sad", "Energetic", "Stressed", "Calm"].map((m) => (
                      <button
                        key={m}
                        onClick={() => setFormData({ ...formData, mood: m })}
                        className={`p-4 text-left font-bold transition-all border ${
                          formData.mood === m
                            ? "border-primary bg-primary/10 text-primary-light"
                            : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={!formData.mood}
                    onClick={() => setStep(3)}
                    className="w-full py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-all disabled:opacity-30 flex items-center justify-center gap-2"
                  >
                    NEXT <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* Step 3 — Sleep & Energy */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-2 text-primary-light">
                    <Brain className="w-4 h-4" />
                    <span className="label-tag">WELLNESS CHECK</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                    Tell us about your rest & energy.
                  </h3>

                  <div className="space-y-6">
                    {[
                      { label: "SLEEP QUALITY?", key: "sleep", options: ["Great", "Disturbed", "Insomnia"] },
                      { label: "ENERGY LEVELS?", key: "energy", options: ["High", "Moderate", "Exhausted"] }
                    ].map((q) => (
                      <div key={q.key}>
                        <label className="label-tag block mb-3">{q.label}</label>
                        <div className="flex gap-2">
                          {q.options.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setFormData({ ...formData, [q.key]: opt })}
                              className={`flex-1 py-3 font-bold text-sm border transition-all ${
                                formData[q.key as keyof typeof formData] === opt
                                  ? "border-primary bg-primary/10 text-primary-light"
                                  : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    disabled={!formData.sleep || !formData.energy}
                    onClick={() => setStep(4)}
                    className="w-full py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-all disabled:opacity-30 flex items-center justify-center gap-2"
                  >
                    SEE MY RESULTS <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* Step 4 — Result */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4 space-y-8"
                >
                  <div className="w-16 h-16 bg-primary-gradient mx-auto flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <span className="label-tag block mb-4">ASSESSMENT COMPLETE</span>
                    <h3 className="text-4xl font-bold text-white tracking-tight mb-4">
                      YOUR MIND<br />
                      <span className="text-gradient">IS READY.</span>
                    </h3>
                    <p className="text-white/40 leading-relaxed">
                      Thank you, <span className="text-white font-bold">{formData.name}</span>. SerenAI has prepared a 
                      personalized emotional wellness roadmap based on your responses.
                    </p>
                  </div>

                  <div className="p-6 border border-white/8 bg-white/3 text-left">
                    <h4 className="label-tag flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-4 h-4 text-primary-light" /> RECOMMENDED NEXT STEPS
                    </h4>
                    <ul className="space-y-3 text-white/50 text-sm font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary-light rounded-full" /> 5-minute guided mindfulness session
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary-light rounded-full" /> Daily mood tracking & pattern analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary-light rounded-full" /> Connect with your AI companion anytime
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={reset}
                    className="w-full py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-all"
                  >
                    GO TO DASHBOARD
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
