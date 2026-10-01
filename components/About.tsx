"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { currentlyLearning } from "@/data/skills";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-shell bg-[#080d15]">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
            className="section-heading"
        >
          <h2 className="section-title font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-xl bg-gradient-to-br from-sky-500/80 to-cyan-400/40 p-px overflow-hidden">
              <div className="relative w-full h-full rounded-xl bg-slate-950 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Rence wearing graduation attire"
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-3">
                Full Stack Web Developer
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I build web applications across the frontend and backend, bringing interfaces, application logic, and data together to solve practical problems. My Information Technology background gives me a foundation in databases, software engineering, and modern web development.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-white mb-2">
                My Focus
              </h4>
              <p className="text-gray-400 leading-relaxed">
                My focus is building scalable full-stack applications with clean code, thoughtful user experiences, and reliable backend systems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-white mb-4">
                Currently Learning
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentlyLearning.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-full border border-blue-600/50 text-blue-400 text-sm font-medium hover:border-blue-600 hover:bg-blue-600/10 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
