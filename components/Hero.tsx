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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28 bg-gradient-to-b from-black to-gray-900">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center lg:pl-4">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Rence</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl text-gray-300 font-semibold">
                BSIT Graduate & Aspiring Web Developer
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              I build functional and user-friendly web applications using modern web technologies, with a focus on clean interfaces, practical solutions, and continuous learning.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-all duration-300 hover:bg-gray-900"
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
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                View My Projects
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-400 hover:bg-gray-900 transition-all duration-300"
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
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Code window style element */}
              <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
                <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-6 space-y-4 font-mono text-sm">
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
