'use client';
import { motion } from 'framer-motion';

const grouped = {
  Frontend: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'React Native',
    'TypeScript',
  ],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'Python', 'TypeScript'],
  Databases: ['MongoDB', 'Mongoose', 'SQL'],
  'In Progress': ['AI/ML'],
};
const tooling = [
  'Git',
  'GitHub',
  'Docker',
  'Vercel',
  'Render',
  'Expo',
  'Vite',
  'Postman',
  'VS Code',
  'CI/CD'
];

function Badge({ label }: { label: string }) {
  return (
    <span className='text-sm px-3 py-2 rounded-full ring-1 ring-white/15 bg-white/5'>
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id='skills'
      className='section'>
      <div className='container'>
        <div className='mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold'>Skills & Tech</h2>
          <span className='underline-gradient mt-4' />
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className='glass p-6'>
            <h3 className='text-xl font-semibold mb-4'>Core Stack</h3>
            <div className='grid grid-cols-2 gap-4'>
              {Object.entries(grouped).map(([group, items]) => (
                <div
                  key={group}
                  className='space-y-2'>
                  <p className='text-sm uppercase tracking-wide text-white/60'>
                    {group}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {items.map((i) => (
                      <Badge
                        key={i}
                        label={i}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className='glass p-6'>
            <h3 className='text-xl font-semibold mb-4'>Tooling</h3>
            <div className='flex flex-wrap gap-2'>
              {tooling.map((t) => (
                <Badge
                  key={t}
                  label={t}
                />
              ))}
            </div>
            <p className='text-xs text-white/60 mt-4'>
              Always learning and leveling up—open to new stacks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
