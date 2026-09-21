"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, GitFork } from "lucide-react";

export default function GitHubSection() {
  return (
    <section id="github-section" className="section-shell bg-[#080d15]">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-600/10 rounded-2xl" />

          {/* Content */}
          <div className="relative p-8 sm:p-12 rounded-2xl border border-gray-800 hover:border-gray-700 bg-gradient-to-br from-gray-900 to-black transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gray-800 text-gray-400">
                    <Code size={28} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Explore on GitHub
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  More projects and experiments are available on my GitHub.
                  Check out my repositories to see my latest work, contributions,
                  and experiments with various technologies.
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300">
                    <Code size={18} />
                    <span className="text-sm font-medium">Active Developer</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300">
                    <GitFork size={18} />
                    <span className="text-sm font-medium">Open Source</span>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-600/30 flex items-center justify-center border border-blue-600/30">
                  <Code size={64} className="text-blue-400" />
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                <Code size={20} />
                Visit My GitHub
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
