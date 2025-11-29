"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy } from "lucide-react";

const experiences = [
  {
    date: "June 2025 – August 2025",
    title: "DevOps Internship",
    company: "RHIS Software",
    description: [
      "Developed a Spring Boot backend application connected to PostgreSQL",
      "Implemented Liquibase for database versioning (migrations & rollback)",
      "Set up an automated CI/CD pipeline with Jenkins triggered by GitHub webhooks",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    date: "February 2024 – June 2024",
    title: "Final Year Project (PFE) Internship",
    company: "Orange Tunisia",
    description: [
      "Designed an intelligent monitoring solution for data centers using autonomous robots",
      "Object detection and real-time measurement of temperature, humidity, gas, and noise via IoT sensors",
      "Developed a real-time web dashboard with email/SMS alerts and alarm system",
      "2nd place at Orange Tunisia PFE Challenge 2024 (out of 20+ projects)",
    ],
    highlight: true,
    color: "from-orange-500 to-red-500",
  },
  {
    date: "July 2023 – August 2023",
    title: "Summer Internship",
    company: "Sagemcom Software & Technologies",
    description: [
      "Automated generation of Software Bill of Materials (sBOM) for Linux & Android products",
      "Built automation scripts in Python and integrated into GitLab CI/CD",
    ],
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Experiences() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-32">
      {/* Central line + animated glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-purple-600/30 to-transparent" />
      <motion.div
        animate={{ scaleY: [0.9, 1.1, 0.9] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-gradient-to-b from-purple-600 via-pink-500 to-cyan-500 blur-3xl"
      />

      <div className="container max-w-6xl mx-auto px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-32"
        >
          PROFESSIONAL EXPERIENCE
        </motion.h2>

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.25 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Central dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full ring-8 ring-purple-500/30 shadow-2xl shadow-purple-500/70 z-30 flex items-center justify-center">
                {exp.highlight && <Trophy className="w-6 h-6 text-yellow-400 animate-pulse" />}
              </div>

              {/* Empty space for alignment */}
              <div className="w-full md:w-1/2" />

              {/* Experience card */}
              <motion.div
                whileHover={{ scale: 1.06, y: -16 }}
                className="w-full md:w-1/2 group relative"
              >
                <div className="relative p-10 bg-gray-900/70 backdrop-blur-2xl border border-gray-700/60 rounded-3xl overflow-hidden">
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-30 transition duration-700`} />

                  <div className="relative z-10">
                    <p className="text-cyan-400 font-bold tracking-wider text-sm md:text-base">
                      {exp.date}
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">
                      {exp.title}
                      {exp.highlight && <span className="ml-3 text-yellow-400 font-bold">2nd Place</span>}
                    </h3>

                    <div className="flex items-center gap-3 mt-4">
                      <Briefcase className="w-6 h-6 text-purple-400" />
                      <p className="text-xl text-gray-200 font-medium">{exp.company}</p>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-purple-400 mt-1.5">▹</span>
                          <span className="text-sm md:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* External glow on hover */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-80 transition duration-1000 -z-10"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}