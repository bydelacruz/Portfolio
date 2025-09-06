import { projects } from '@/lib/projects';
import Image from 'next/image';
import BackLink from '@/components/BackLink';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <div className='container py-24'>Not found.</div>;
  return (
    <div className='section'>
      <div className='container'>
        <BackLink className='text-sm text-white/70 hover:text-accent-teal'>
          ← Back
        </BackLink>
        <h1 className='text-3xl md:text-5xl font-bold mt-4'>{project.title}</h1>
        <p className='text-white/70 mt-2 max-w-prose'>{project.description}</p>
        {project.image && (
          <div className='mt-6 aspect-[16/9] rounded-xl overflow-hidden border border-white/10'>
            <Image
              src={project.image}
              alt={project.title}
              width={1600}
              height={900}
              className='w-full h-full object-cover'
            />
          </div>
        )}
        {project.demo && (
          <div className='mt-6'>
            <a
              href={project.demo}
              target='_blank'
              rel='noopener noreferrer'
              className='px-4 py-2 rounded-lg bg-accent-indigo/90 hover:bg-accent-indigo'>
              Open Live Demo ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
