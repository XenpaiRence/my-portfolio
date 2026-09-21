"use client";

import { Code, Share2, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/70 bg-[#070b12] py-10 sm:py-12">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Rence</h3>
            <p className="text-gray-400 text-sm">
              Web Developer & BSIT Graduate
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
                aria-label="GitHub"
              >
                <Code size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Share2 size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              Built with Next.js and Tailwind CSS.
            </p>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" fill="currentColor" />
              <span>by Rence</span>
            </div>
            <p>© {currentYear}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
