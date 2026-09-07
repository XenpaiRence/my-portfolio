"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Code, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-800 bg-gray-900 z-10">
                <h2 className="text-2xl font-bold text-white">Project Details</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Project Image */}
                <div className="h-64 sm:h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-2">🖼️</div>
                    <p>Project Screenshot</p>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {project.longDescription}
                  </p>
                </div>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Problem
                    </h4>
                    <p className="text-gray-300">{project.problem}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-300">{project.solution}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Learnings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Challenges
                    </h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      What I Learned
                    </h4>
                    <ul className="space-y-2">
                      {project.learnings.map((learning, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">
                            {learning}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-300 text-sm font-medium border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-gray-800">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-white hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
                    >
                      <Code size={20} />
                      View GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                      View Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
