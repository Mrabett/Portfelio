"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fond animé ultra doux */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20" />
        <motion.div
          animate={{ scale: [1, 1.4, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
      </div>

      <div className="container relative z-10 px-6 lg:px-12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* === Texte à gauche === */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="text-5xl md:text-7xl font-black text-white leading-tight"
            >
              Welcome,
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              I'm MRABET Hedi, <br />
              a Cloud Computing Student | DevOps Enthusiast.
            </motion.h2>

            {/* BOUTONS FONCTIONNELS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6"
            >
              {/* Contact Me → Scroll vers #contact */}
              <Link
                href="#contact"
                scroll={true}
                className="group relative px-8 py-4 bg-purple-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-500 hover:bg-purple-700 text-center"
              >
                <span className="relative z-10">Contact Me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>

              {/* Get Resume → Télécharge le CV */}
              <a
                href="/cv.pdf"
                download="CV_MRABET_Hedi.pdf"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-2xl backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-purple-400 transition-all duration-500 text-center"
              >
                Get Resume
              </a>
            </motion.div>
          </motion.div>

          {/* === Carte code à droite (inchangée) === */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-purple-600/30 rounded-3xl blur-3xl animate-pulse" />

            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <pre className="text-green-400 font-mono text-sm md:text-base leading-relaxed overflow-x-auto whitespace-pre-wrap break-words">
{`const coder = {
  name: 'MRABET Hedi',
  skills: ['OpenStack', 'Netplan', 'Ubuntu 24.04', 
  'Terraform', 'Linux', 'Cloud Networking'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`}
              </pre>

              <div className="mt-6 flex items-center">
                <span className="text-green-400 text-2xl animate-pulse">Block</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}