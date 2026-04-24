"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="section-padding relative bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our Mission</h2>
            <p className="text-xl md:text-2xl text-background/80 leading-relaxed font-light">
              To make mental health support <span className="font-semibold text-white">accessible, inclusive, and stigma-free</span> for everyone using AI.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
              <Eye className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our Vision</h2>
            <p className="text-xl md:text-2xl text-background/80 leading-relaxed font-light">
              To build a global platform that empowers <span className="font-semibold text-white">emotional well-being</span> through intelligent, human-centered technology.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
