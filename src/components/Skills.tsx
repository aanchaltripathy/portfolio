'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact, SiRedux, SiTypescript, SiFirebase, SiExpo,
  SiNodedotjs, SiGraphql, SiSocketdotio, SiStripe,
  SiAmazonwebservices, SiFigma, SiJest, SiGit
} from 'react-icons/si';

// Main skills data for progress bars
const skills = [
  {
    category: "Mobile Development",
    technologies: [
      { name: "React Native", level: 95, color: "from-blue-500 to-cyan-500", icon: <SiReact /> },
      { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-800", icon: <SiTypescript /> },
      { name: "Redux", level: 85, color: "from-purple-500 to-pink-500", icon: <SiRedux /> },
      { name: "Firebase", level: 80, color: "from-yellow-500 to-orange-500", icon: <SiFirebase /> },
      { name: "Expo", level: 88, color: "from-gray-700 to-gray-900", icon: <SiExpo /> }
    ]
  },
  {
    category: "Backend & APIs",
    technologies: [
      { name: "Node.js", level: 75, color: "from-green-600 to-green-800", icon: <SiNodedotjs /> },
      { name: "REST APIs", level: 85, color: "from-blue-500 to-indigo-600", icon: "🌐" },
      { name: "GraphQL", level: 70, color: "from-pink-500 to-purple-600", icon: <SiGraphql /> },
      { name: "Socket.io", level: 75, color: "from-green-500 to-emerald-600", icon: <SiSocketdotio /> },
      { name: "Stripe", level: 80, color: "from-purple-500 to-indigo-600", icon: <SiStripe /> }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", level: 90, color: "from-orange-500 to-red-500", icon: <SiGit /> },
      { name: "System Design", level: 75, color: "from-blue-500 to-purple-600", icon: "🏗️" },
      { name: "AWS", level: 70, color: "from-yellow-500 to-orange-600", icon: <SiAmazonwebservices /> },
      { name: "Figma", level: 65, color: "from-purple-500 to-pink-500", icon: <SiFigma /> },
      { name: "Jest", level: 80, color: "from-red-500 to-pink-500", icon: <SiJest /> }
    ]
  }
];

// Compact skill icons for grid
const skillIcons = [
  { name: "React Native", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Expo", icon: <SiExpo /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Socket.io", icon: <SiSocketdotio /> },
  { name: "Stripe", icon: <SiStripe /> },
  { name: "AWS", icon: <SiAmazonwebservices /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "Git", icon: <SiGit /> }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
          </div>

          {/* Skill Icons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16"
          >
            {skillIcons.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="text-4xl text-blue-400 mb-2">{skill.icon}</div>
                <span className="text-sm text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Categories with progress bars */}
          <div className="space-y-12">
            {skills.map((category, catIndex) => (
              <motion.div
                key={category.category}
                className="bg-gray-800/40 rounded-2xl p-8 border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + catIndex * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-white">{category.category}</h3>
                <div className="space-y-4">
                  {category.technologies.map((tech, idx) => (
                    <div key={tech.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span className="text-xl text-blue-400">{tech.icon}</span>
                          <span className="text-gray-300">{tech.name}</span>
                        </div>
                        <span className="text-blue-400">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${tech.level}%` } : {}}
                          transition={{ duration: 1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}