"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-32">
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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/20" />

      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        {/* Titre ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
            ABOUT ME
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* === Photo avec effet 3D + glow === */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative group mx-auto max-w-md"
          >
            <div className="relative">
              {/* Glow derrière la photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700" />
              
              {/* Photo container */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-600/40 shadow-2xl">
                <Image
                  src="/Images/ME.jpg"
                  alt="Hedi Mrabet"
                  width={600}
                  height={700}
                  className="w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Badge en bas à droite */}
              <div className="absolute bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                Available for Work
              </div>
            </div>
          </motion.div>

          {/* === Texte + Stats === */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-12"
          >
            {/* Description */}
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Hello! I'm <span className="text-cyan-400 font-bold">Hedi Mrabet</span>, a passionate{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                  Cloud Computing Engineer
                </span>{" "}
                and DevOps enthusiast based in Tunis, Tunisia.
              </p>
              <p>
                Currently pursuing my engineering degree at ESPRIT, I specialize in building modern, scalable cloud infrastructures using tools like Docker, Kubernetes, Terraform, OpenStack, Jenkins, and AWS.
              </p>
              <p>
                I love turning complex problems into simple, beautiful, and efficient solutions. When I'm not coding or deploying servers, you'll find me learning new technologies, automating everything, or sharing knowledge with the community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}