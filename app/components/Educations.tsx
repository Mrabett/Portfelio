"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cloud, Server, Cpu, Code2 } from "lucide-react";

export default function Education() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-20">
      {/* Fond cyber grid + glow */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/20" />

      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        {/* === Titre EDUCATION === */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
            EDUCATION
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* === Illustration animée à gauche === */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-96 lg:h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">

              {/* Laptop 3D qui tourne */}
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <div className="relative mx-auto w-80 h-56 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl transform-gpu preserve-3d">
                  <div className="absolute inset-4 bg-black rounded-lg border-4 border-purple-500/50 overflow-hidden">
                    <div className="h-full flex items-center justify-center">
                      <Code2 className="w-24 h-24 text-cyan-400 animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-12 bg-gradient-to-t from-gray-900 to-gray-800 rounded-b-3xl" />
                </div>
              </motion.div>

              {/* Icônes flottantes */}
              <motion.div animate={{ y: [0, -20, 0], rotate: [0, 360] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -top-10 -left-10">
                <Cloud className="w-16 h-16 text-purple-400 drop-shadow-lg" />
              </motion.div>
              <motion.div animate={{ y: [0, 20, 0], rotate: [0, -360] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -bottom-12 -right-8">
                <Server className="w-14 h-14 text-cyan-400 drop-shadow-lg" />
              </motion.div>
              <motion.div animate={{ x: [-20, 20, -20] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 right-0">
                <Cpu className="w-12 h-12 text-pink-400 drop-shadow-lg" />
              </motion.div>

              {/* Particules */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -100, 0], opacity: [0, 1, 0], scale: [0, 1, 0] }}
                  transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={{ top: `${20 + i * 10}%`, left: `${10 + i * 15}%` }}
                />
              ))}
            </div>
          </motion.div>

          {/* === Diplômes à droite === */}
          <div className="space-y-12">

            {/* ESPRIT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl transition" />
              <div className="relative bg-gray-900/80 backdrop-blur-2xl border border-purple-600/40 rounded-3xl p-10 shadow-2xl">
                <p className="text-cyan-300 font-bold text-sm tracking-wider mb-4">
                  2024 – Present
                </p>
                <h3 className="text-5xl font-black text-white leading-tight">
                  ENGINEERING DEGREE IN<br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    CLOUD COMPUTING
                  </span>
                </h3>
                <div className="flex items-center gap-4 mt-6 text-purple-300">
                  <GraduationCap className="w-10 h-10" />
                  <p className="text-xl font-semibold">
                    ESPRIT – Private Higher School of Engineering and Technology
                  </p>
                </div>
              </div>
            </motion.div>

            {/* FST */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-3xl blur-2xl transition" />
              <div className="relative bg-gray-900/80 backdrop-blur-2xl border border-cyan-600/40 rounded-3xl p-10 shadow-2xl">
                <p className="text-cyan-300 font-bold text-sm tracking-wider mb-4">
                  2021 – 2024
                </p>
                <h3 className="text-4xl font-black text-white leading-tight">
                  BACHELOR'S DEGREE IN<br />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    COMPUTER SYSTEMS ENGINEERING
                  </span>
                </h3>
                <div className="flex items-center gap-4 mt-6 text-cyan-300">
                  <GraduationCap className="w-10 h-10" />
                  <p className="text-xl font-semibold">
                    Faculty of Sciences of Tunis (FST)
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}