'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomeRoute() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
