"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({
  project,
  onClick,
  index,
}: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group relative h-full"
    >
      <div className="h-full rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 bg-gradient-to-br from-gray-900 to-black transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 sm:h-56 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
            <div className="text-center">
              <div className="text-4xl mb-2">🖼️</div>
              <p>{project.title}</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6 space-y-2">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded text-xs bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 rounded text-xs text-gray-400">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-800">
            <button
              onClick={onClick}
              className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              View Details
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
                aria-label="View GitHub"
              >
                <Code size={20} />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
                aria-label="View Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
