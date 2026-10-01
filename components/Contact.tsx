"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code, Share2, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [submissionError, setSubmissionError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSubmissionStatus("idle");
    setSubmissionError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/rencelacanilao23@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _replyto: formData.email,
            _subject: `Portfolio message from ${formData.name}`,
            message: formData.message,
          }),
        }
      );
      const result = await response.json();

      if (!response.ok || result.success !== "true" && result.success !== true) {
        setSubmissionError(
          typeof result.message === "string"
            ? result.message
            : "The email service did not accept the message."
        );
        setSubmissionStatus("error");
        return;
      }

      setFormData({ name: "", email: "", message: "" });
      setSubmissionError("");
      setSubmissionStatus("success");
    } catch {
      setSubmissionError(
        "The email service could not be reached. Check your connection and try again."
      );
      setSubmissionStatus("error");
    }
  };

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
    <section id="contact" className="section-shell bg-[#0b121c]">
      <div className="site-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-heading text-center"
        >
          <h2 className="section-title font-bold text-white mb-4">
            Let&apos;s Build Something Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            I&apos;m open to opportunities, collaborations, and projects where I can
            continue growing as a developer. Whether you have a question or just
            want to say hi, feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12 lg:mt-16"
        >
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="p-6 rounded-lg border border-gray-800 hover:border-gray-700 bg-gradient-to-br from-gray-900 to-black transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-sm text-gray-400">
                    rencelacanilao23@gmail.com
                  </p>
                </div>
              </div>
              <a
                href="mailto:rencelacanilao23@gmail.com"
                className="text-blue-400 hover:text-blue-300 font-medium text-sm"
              >
                Send me an email →
              </a>
            </div>

            <div className="p-6 rounded-lg border border-gray-800 hover:border-gray-700 bg-gradient-to-br from-gray-900 to-black transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-sm text-gray-400">09752493649</p>
                </div>
              </div>
              <a
                href="tel:09752493649"
                className="text-blue-400 hover:text-blue-300 font-medium text-sm"
              >
                Call me
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Connect on Social Media
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/XenpaiRence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Code size={24} />
                </a>
                <a
                  href="https://www.facebook.com/donlorico.lacanilao.7?share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EomVYWfAN#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Share2 size={24} />
                </a>
                <a
                  href="mailto:rencelacanilao23@gmail.com"
                  className="p-3 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-600/30">
              <p className="text-gray-300 text-sm">
                💡 <span className="font-semibold">Pro Tip:</span> The fastest way
                to reach me is via email. I usually respond within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:border-blue-600 focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:border-blue-600 focus:outline-none transition-colors duration-300"
                placeholder="rencelacanilao23@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:border-blue-600 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={submissionStatus === "sending" || submissionStatus === "success"}
              className={`w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                submissionStatus === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : submissionStatus === "sending"
                    ? "bg-slate-600"
                  : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              }`}
            >
              {submissionStatus === "success" ? (
                <>
                  ✓ Message Sent!
                </>
              ) : submissionStatus === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>

            {submissionStatus === "success" && (
              <p role="status" className="text-sm text-green-400 text-center">
                Your message was sent successfully.
              </p>
            )}
            {submissionStatus === "error" && (
              <p role="alert" className="text-sm text-red-400 text-center">
                {submissionError || "We couldn&apos;t send your message. Please try again or email me directly."}
              </p>
            )}
            <p className="text-xs text-gray-500 text-center">
              Messages are delivered to my email through FormSubmit. First-time
              setup may require email confirmation.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
