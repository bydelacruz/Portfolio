'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        type: 'spring',
        stiffness: 120,
        damping: 18,
      }}
      className='group relative glass overflow-hidden'>
      <div className='absolute -inset-40 bg-gradient-to-tr from-accent.indigo/20 via-accent.teal/20 to-accent.violet/20 blur-3xl opacity-0 group-hover:opacity-100 transition' />
      <div className='relative p-4 md:p-6'>
        <div className='aspect-[4/3] overflow-hidden rounded-xl border border-white/10'>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={900}
              className='w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500'
            />
          ) : (
            <div className='w-full h-full grid place-items-center text-white/40'>
              No image
            </div>
          )}
        </div>
        <div className='mt-4'>
          <h3 className='text-lg md:text-xl font-semibold'>{project.title}</h3>
          <p className='text-white/70 text-sm line-clamp-2'>
            {project.description}
          </p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {project.tags?.map((t) => (
            <span
              key={t}
              className='text-xs px-2 py-1 rounded-full ring-1 ring-white/15'>
              {t}
            </span>
          ))}
        </div>
        <div className='mt-5 flex items-center gap-4'>
          {project.demo && (
            <a
              href={project.demo}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm hover:text-accent.teal transition'>
              Live Demo ↗
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm hover:text-accent.indigo transition'>
              Source Code ↗
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className='ml-auto text-sm hover:text-accent.violet transition'>
            Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
