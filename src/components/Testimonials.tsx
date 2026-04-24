"use client";

import { motion } from "framer-motion";

const testimonials = [
  { quote: "SerenAI changed how I handle anxiety. It's the only tool that actually listens.", name: "Alex P.", role: "Product Designer" },
  { quote: "Available at 3am when my anxiety spikes. That alone makes it worth everything.", name: "Sarah J.", role: "Software Engineer" },
  { quote: "Feels more human than any therapist I've tried. Genuinely impressive.", name: "Michael R.", role: "Founder" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding section-border bg-black relative">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-[#6C5CE7]/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="bracket-tag inline-block mb-8">[ COMMUNITY ]</span>
          <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white">
            REAL<br />
            PEOPLE,<br />
            REAL <span className="text-gradient">RESULTS.</span>
          </h2>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-3 gap-px bg-white/8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black p-10 md:p-12 flex flex-col justify-between group hover:bg-white/3 transition-colors"
            >
              <p className="text-white/70 text-xl leading-relaxed mb-10 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="label-tag mt-1">{t.role}</p>
                </div>
                <div className="w-8 h-px bg-primary-gradient group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
