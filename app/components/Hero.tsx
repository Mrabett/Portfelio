"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fond animé */}
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

          {/* Texte à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-black text-white"
            >
              Welcome,
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            >
              I&apos;m MRABET Hedi,<br />
              Cloud Computing Student | DevOps Enthusiast.
            </motion.h2>

            {/* BOUTONS 100% FONCTIONNELS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6"
            >
              {/* Contact Me → Scroll fluide vers #contact */}
              <Link
                href="#contact"
                scroll={true}
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-600/60 transition-all duration-500 text-center"
              >
                <span className="relative z-10">Contact Me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </Link>

              {/* Get Resume → Télécharge le CV sans erreur */}
              <a
                href="/cv.pdf"
                download="CV_MRABET_Hedi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border-2 border-purple-500 text-purple-400 font-bold text-lg rounded-2xl backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-purple-400 transition-all duration-500 text-center"
              >
                Get Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Carte code à droite (inchangée) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-3xl blur-3xl animate-pulse" />
            <div className="relative bg-gray-900/95 backdrop-blur-2xl border border-purple-500/40 rounded-3xl p-10 shadow-2xl">
              <div className="flex gap-3 mb-8">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <div className="w-4 h-4 rounded-full bg-yellow-500" />
                <div className="w-4 h-4 rounded-full bg-green-500" />
              </div>

              <pre className="text-green-400 font-mono text-sm md:text-lg leading-relaxed whitespace-pre-wrap break-words">
{`const coder = {
  name: "MRABET Hedi",
  role: "Cloud Computing Engineer",
  location: "Tunis, Tunisia",
  skills: [
    "OpenStack", "Terraform", "Kubernetes", "Docker",
    "Jenkins", "Ansible", "Linux", "Ubuntu Server",
    "CI/CD", "Git", "Python", "Bash", "Netplan",
    "Prometheus", "Grafana", "AWS", "Cloud Networking"
  ],
  traits: {
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    teamPlayer: true,
    passionate: true
  },
  hireable: function() {
    return this.traits.hardWorker && 
           this.traits.problemSolver && 
           this.skills.length >= 10;
  }
};

// Result: true → Ready for opportunities`}
              </pre>

              <div className="mt-10 flex items-center gap-3">
                <span className="text-green-400 text-4xl animate-pulse">Block</span>
                <span className="text-gray-400">Available now</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}