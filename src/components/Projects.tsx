'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const GITHUB_BASE = "https://github.com/aanchaltripathy";

const projects = [
  {
    id: 1,
    title: "SmartFinance+",
    description: "A finance app with goal tracking, anomaly detection, and analytics. Features real-time financial insights and smart budgeting tools.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "TypeScript", "Firebase", "Charts.js"],
    github: `${GITHUB_BASE}/SmartFinancePlus`
  },
  {
    id: 2,
    title: "MetroPay System",
    description: "Payment-integrated metro system with real-time tracking, fare calculation, and seamless payment processing.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Node.js", "Stripe", "Socket.io"],
    github: `${GITHUB_BASE}/MetroPay-System`
  },
  {
    id: 3,
    title: "HealthTracker Pro",
    description: "Comprehensive health tracking app with workout planning, nutrition tracking, and progress analytics.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Redux", "HealthKit", "GraphQL"],
    github: `${GITHUB_BASE}/HealthTrackerPro`
  },
  {
    id: 4,
    title: "TaskFlow",
    description: "Collaborative task management app with real-time updates, team collaboration, and project tracking.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    github: `${GITHUB_BASE}/TaskFlow`
  },
  {
    id: 5,
    title: "WeatherNow",
    description: "Real-time weather app with location-based forecasts, severe weather alerts, and interactive maps.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "OpenWeather API", "Maps", "Push Notifications"],
    github: `${GITHUB_BASE}/WeatherNow`
  },
  {
    id: 6,
    title: "EduLearn",
    description: "Educational platform with interactive courses, progress tracking, and offline learning capabilities.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Video Streaming", "SQLite", "Offline Sync"],
    github: `${GITHUB_BASE}/EduLearn`
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </motion.h2>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <Github size={20} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    View on GitHub
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href={GITHUB_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold glow hover:glow transition-all duration-300 inline-block"
            >
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}