"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import {
  Code2,
  Server,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Smartphone,
  Wrench,
};

export default function Skills() {
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
    <section id="skills" className="section-shell bg-[#0b121c]">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-heading"
        >
          <h2 className="section-title font-bold text-white mb-4">
            Skills &amp; Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch"
        >
          {skills.map((category) => {
            const IconComponent = iconMap[category.icon || "Code2"];

            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="group relative h-full bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-sky-400/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10"
              >
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 p-3 w-fit rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
                    <IconComponent size={24} />
                  </div>

                  {/* Category Name */}
                  <h3 className="text-lg font-bold text-white mb-4">
                    {category.category}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mr-2" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 p-5 sm:p-6 rounded-xl border border-blue-600/20 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"
        >
          <p className="text-gray-300 text-center">
            I focus on building practical skills and staying updated with modern technologies. My expertise is continuously evolving through real-world projects and continuous learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
