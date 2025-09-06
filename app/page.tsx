'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Landing from '@/components/Landing';

export default function LandingRoute() {
  return (
    <main>
      <Landing onEnter={() => window.location.assign('/home')} />
    </main>
  );
}
