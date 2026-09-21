"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Share2, Mail } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="relative flex items-center overflow-hidden border-b border-slate-800/60 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:min-h-[calc(100vh-4.5rem)]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
                Hello, I&apos;m
              </p>
              <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-bold text-white leading-[0.98] tracking-[-0.055em]">
                Rence<span className="text-sky-400">.</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl text-slate-200 font-semibold tracking-tight">
                BSIT Graduate & Aspiring Web Developer
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              I build functional and user-friendly web applications using modern web technologies, with a focus on clean interfaces, practical solutions, and continuous learning.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-3"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-md border border-slate-700/80 hover:border-sky-400/60 text-slate-400 hover:text-white transition-all duration-200 hover:bg-sky-400/5"
                aria-label="GitHub"
              >
                <Code size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-all duration-300 hover:bg-gray-900"
                aria-label="LinkedIn"
              >
                <Share2 size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 rounded-lg border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-all duration-300 hover:bg-gray-900"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-sky-500 text-slate-950 font-semibold hover:bg-sky-300 transition-colors duration-200"
              >
                View My Projects
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-slate-600 text-white font-semibold hover:border-sky-400/70 hover:bg-white/[0.04] transition-colors duration-200"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Code window style element */}
              <div className="bg-[#0c1420]/95 rounded-xl border border-slate-700/80 overflow-hidden shadow-2xl shadow-sky-950/30">
                <div className="bg-slate-900/90 border-b border-slate-700/80 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-5 sm:p-7 space-y-4 font-mono text-sm leading-relaxed">
                  <div className="text-blue-400">
                    <span className="text-cyan-400">const</span> <span className="text-yellow-300">developer</span> = {"{"}
                  </div>
                  <div className="text-gray-400 ml-4">
                    name: <span className="text-green-400">Rence</span>,
                  </div>
                  <div className="text-gray-400 ml-4">
                    passion: <span className="text-green-400">Web Development</span>,
                  </div>
                  <div className="text-gray-400 ml-4">
                    focus: <span className="text-green-400">Clean Code &amp; UX</span>,
                  </div>
                  <div className="text-blue-400">
                    {"}"}
                  </div>
                </div>
              </div>

              {/* Animated background elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-lg border border-blue-500/20 -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
