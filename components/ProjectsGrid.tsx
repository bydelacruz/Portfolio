"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <span className="underline-gradient mt-4" />
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={{ hidden: {}, show: {} }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </motion.div>
      </div>
    </section>
  );
}
