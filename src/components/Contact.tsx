'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, ArrowRight } from 'lucide-react';

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/aanchaltripathy",
    icon: Github,
    color: "hover:text-gray-300"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aanchal-tripathy-127321161/",
    icon: Linkedin,
    color: "hover:text-blue-400"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: Twitter,
    color: "hover:text-blue-400"
  },
  {
    name: "Email",
    url: "mailto:aanchaltripathy24@gmail.com",
    icon: Mail,
    color: "hover:text-red-400"
  }
];

export default function Contact() {

  return (
    <section id="contact" className="gradient-bg min-h-screen overflow-x-hidden py-24 md:py-28 scroll-mt-[96px] md:scroll-mt-[112px]">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">Let's Build Something Amazing?</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p 
              className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed break-words hyphens-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about mobile development.
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Send me a message</h3>
              <form action="https://formspree.io/f/xdkdpkyo" method="POST" className="space-y-6">
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
      <input
        type="text"
        name="name"
        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        placeholder="Your name"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
      <input
        type="email"
        name="email"
        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        placeholder="your.email@example.com"
        required
      />
    </div>
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
    <input
      type="text"
      name="subject"
      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
      placeholder="What's this about?"
      required
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
    <textarea
      rows={5}
      name="message"
      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
      placeholder="How can I help?"
      required
    ></textarea>
  </div>
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold glow hover:glow transition-all duration-300 flex items-center justify-center gap-2"
  >
    <Send size={20} />
    Send Message
  </motion.button>
</form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Get in touch</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm currently available for freelance work and full-time opportunities. 
                  Whether you have a mobile app project in mind or just want to chat, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-gray-300">aanchaltripathy24@gmail.com</p>
                  </div>
                </div>
                
                {/* <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Send size={24} className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Response Time</h4>
                    <p className="text-gray-300">Usually within 24 hours</p>
                  </div>
                </div> */}
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Follow me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 text-gray-400 transition-all duration-300 ${social.color}`}
                      >
                        <IconComponent size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-16"
          >
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold glow hover:glow transition-all duration-300 mx-auto"
            >
              Download Resume
              <ArrowRight size={20} />
            </motion.button> */}
         <div className="flex justify-center mt-6">
  <motion.a
    href="/resume.pdf"
    download="AanchalTripathy.pdf"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
  >
    Download Resume
    <ArrowRight size={20} />
  </motion.a>
</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
