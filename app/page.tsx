'use client';

import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}