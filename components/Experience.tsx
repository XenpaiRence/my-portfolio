"use client";

import { motion } from "framer-motion";
import { experiences, education } from "@/data/experience";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const typeIconMap = {
  work: Briefcase,
  project: Award,
  achievement: Award,
};

export default function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="section-shell bg-[#0b121c]">
      <div className="site-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-heading"
        >
          <h2 className="section-title font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Section */}
          <div className="lg:pl-2 lg:pr-4">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <Briefcase className="text-blue-400" size={28} />
              Professional Experience
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {experiences.map((exp) => {
                const IconComponent = typeIconMap[exp.type];

                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative ml-4 pb-6 border-l-2 border-blue-600"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-13px] top-0 z-10 w-6 h-6 rounded-full bg-blue-600 border-4 border-gray-950" />

                    {/* Content */}
                    <div className="relative ml-5 p-4 rounded-lg border border-gray-800 hover:border-gray-700 bg-gradient-to-br from-gray-900 to-black transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {exp.title}
                          </h4>
                          <p className="text-blue-400 text-sm font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <IconComponent size={20} className="text-gray-500" />
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 flex-shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Education Section */}
          <div className="lg:pl-6">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <GraduationCap className="text-cyan-400" size={28} />
              Education
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {/* Degree */}
              <div className="p-6 rounded-lg border border-gray-800 hover:border-gray-700 bg-gradient-to-br from-gray-900 to-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-600/10">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {education.degree}
                </h4>
                <p className="text-cyan-400 text-sm font-medium mb-2">
                  {education.institution}
                </p>
                <p className="text-gray-400 text-sm mb-4">{education.year}</p>

                <ul className="space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div className="p-6 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900 to-black">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Coursework & Skills
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Specialized in web development, database design, software engineering, and IT infrastructure. Hands-on experience with full-stack development, mobile applications, and emerging technologies through course projects and internships.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
