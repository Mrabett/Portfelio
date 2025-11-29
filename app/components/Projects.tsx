"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Integrated HR Management System",
    subtitle: "Academic Project • ESPRIT • Jan – May 2025",
    tools: ["Symfony", "JavaFX", "MySQL", "Hugging Face", "Google Cloud", "AI"],
    description: "Full-stack HR platform (Web + Desktop) featuring AI-powered candidate/job matching using Hugging Face models. Fully deployed on Google Cloud Platform.",
    github: "https://github.com/ons-ghariani18/TuniRh_LuminaTech_web",
    demo: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Smart Home Automation System",
    subtitle: "Academic Project • Faculty of Sciences of Tunis • Apr – May 2023",
    tools: ["ESP8266", "Arduino IDE", "Flask", "WiFi", "Temp/Gas/Motion Sensors"],
    description: "Complete home automation system: lighting control, gas leak detection, intrusion alerts, and energy management via web dashboard.",
    github: "https://github.com/hedimrabet/smart-home-esp8266",
    demo: "#",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "IoT Smart Parking System",
    subtitle: "Academic Project • Faculty of Sciences of Tunis • Nov – Dec 2023",
    tools: ["Arduino", "IR Sensors", "MQTT", "Google Cloud", "FlutterFlow"],
    description: "Real-time parking management: spot detection, mobile reservation app, and visual guidance system using LED indicators.",
    github: "https://github.com/hedimrabet/smart-parking-iot",
    demo: "#",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Sports Complex Mobile App",
    subtitle: "Academic Project • ESPRIT • 2024",
    tools: ["FlutterFlow", "Firebase", "Google Maps API", "Calendar"],
    description: "No-code mobile app for sports facility management: field booking, event scheduling, sponsor integration, and real-time calendar.",
    github: "#",
    demo: "https://app.flutterflow.io/share/xxx",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden py-32">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/25 via-black to-black" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="pl-8 md:pl-20 mb-20"
      >
        <h2 className="inline-block px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-4xl md:text-6xl font-black text-white shadow-2xl shadow-purple-600/60">
          PROJECTS
        </h2>
      </motion.div>

      {/* Project Cards */}
      <div className="space-y-20 max-w-6xl mx-auto px-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative"
          >
            <div className="relative bg-gray-950/95 backdrop-blur-2xl border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">

              {/* macOS dots */}
              <div className="flex gap-3 p-6">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <div className="w-4 h-4 rounded-full bg-yellow-500" />
                <div className="w-4 h-4 rounded-full bg-green-500" />
              </div>

              <div className="px-10 pb-14 pt-2 font-mono text-base text-gray-200">
                {/* Subtitle */}
                <p className="text-cyan-400 font-bold text-lg mb-6">
                  {project.subtitle}
                </p>

                {/* Code block */}
                <pre className="text-green-400 font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words">
{`const project = {
  name: "${project.title}",
  tools: [${project.tools.map(t => `"${t}"`).join(", ")}],
  description: "${project.description}"
};`}
                </pre>

                {/* Links */}
                <div className="flex flex-wrap gap-10 mt-10">
                  {project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition"
                    >
                      <Github className="w-7 h-7" />
                      <span className="font-bold">View Code</span>
                    </motion.a>
                  )}
                  {project.demo !== "#" && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition"
                    >
                      <ExternalLink className="w-7 h-7" />
                      <span className="font-bold">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r blur-3xl opacity-0 group-hover:opacity-80 transition duration-1000 -z-10"
                style={{
                  "--tw-gradient-from": project.color.split(" ")[1],
                  "--tw-gradient-to": project.color.split(" ")[3],
                } as React.CSSProperties}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}