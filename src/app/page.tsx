'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CurrentWork from '@/components/CurrentWork';

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CurrentWork/>
      <Contact />
      <Footer />
    </main>
  );
}