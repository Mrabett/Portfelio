"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé ! Merci de m'avoir contacté");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-20">
      {/* Fond cyberpunk */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />

      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* === Formulaire à gauche === */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-10">
              CONTACT WITH ME
            </h2>

            <div className="bg-gray-900/60 backdrop-blur-2xl border border-gray-700/50 rounded-3xl p-10 shadow-2xl">
              <p className="text-gray-300 mb-8 leading-relaxed">
                If you have any questions or concerns, please don&apos;t hesitate to contact me.
                I am open to any work opportunities that align with my skills and interests.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Your Name:</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-800/70 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition text-white"
                    placeholder="Hedi Mrabet"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Your Email:</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-800/70 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition text-white"
                    placeholder="hedi@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Your Message:</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-800/70 border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition resize-none text-white"
                    placeholder="Hello Hedi, I saw your portfolio and..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-pink-600/50 hover:shadow-purple-600/60 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  SEND MESSAGE
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* === Infos à droite === */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Mot "CONTACT" vertical */}
            <div className="absolute top-32 -right-10 md:right-0 transform rotate-90 origin-right pointer-events-none">
              <h3 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600 opacity-10 tracking-widest">
                CONTACT
              </h3>
            </div>

            <div className="space-y-8 mt-20">
              <motion.div whileHover={{ x: 12 }} className="flex items-center gap-5">
                <div className="p-4 bg-gray-800/50 rounded-2xl border border-gray-700">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-xl text-white font-medium">mrabethedi8@gmail.com</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 12 }} className="flex items-center gap-5">
                <div className="p-4 bg-gray-800/50 rounded-2xl border border-gray-700">
                  <Phone className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-xl text-white font-medium">+216 29 495 337</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 12 }} className="flex items-center gap-5">
                <div className="p-4 bg-gray-800/50 rounded-2xl border border-gray-700">
                  <MapPin className="w-8 h-8 text-pink-400" />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-xl text-white font-medium">Tunis, Tunisia</p>
                </div>
              </motion.div>

              {/* Réseaux sociaux */}
              <div className="flex gap-6 pt-8">
                <motion.a
                  href="https://www.linkedin.com/in/hedi-mrabet-a6908b260/"
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg"
                >
                  <Linkedin className="w-8 h-8 text-white" />
                </motion.a>

                <motion.a
                  href="https://github.com/Mrabett"
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: -8 }}
                  className="p-4 bg-gray-800 rounded-2xl border border-gray-700 shadow-lg"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.805.577 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}