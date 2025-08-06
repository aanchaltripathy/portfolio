'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, TrendingUp, Zap } from 'lucide-react';

const currentProjects = [
  {
    id: 1,
    title: "SmartFinance+ Production",
    description: "Currently evolving SmartFinance+ into a production-grade finance app with real-time analytics and anomaly detection.",
    progress: 85,
    status: "In Progress",
    technologies: ["React Native", "TypeScript", "Firebase", "Analytics"],
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "AI-Powered Metro System",
    description: "Developing an AI-enhanced metro payment system with predictive analytics and smart routing.",
    progress: 60,
    status: "In Progress",
    technologies: ["React Native", "Python", "TensorFlow", "Payment APIs"],
    icon: Zap,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Health Analytics Platform",
    description: "Building a comprehensive health analytics platform with machine learning insights and predictive health monitoring.",
    progress: 40,
    status: "Planning",
    technologies: ["React Native", "HealthKit", "ML", "Analytics"],
    icon: Clock,
    color: "from-green-500 to-emerald-500"
  }
];

export default function CurrentWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="current-work" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">What I'm Working On</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p 
              className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Currently evolving SmartFinance+ into a production-grade finance app with real-time analytics and anomaly detection.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color}`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        project.status === "In Progress" 
                          ? "bg-blue-500/20 text-blue-400" 
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm text-blue-400">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${project.progress}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 1.2 + index * 0.2 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${project.color}`}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-12"
          >
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Always Learning
              </h3>
              <p className="text-gray-300 mb-6">
                I'm constantly exploring new technologies and methodologies to stay at the forefront of mobile development. 
                Currently diving deep into AI/ML integration, advanced React Native patterns, and performance optimization.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  AI/ML Integration
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  Performance Optimization
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm">
                  Advanced Patterns
                </span>
                <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm">
                  Cross-Platform
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
