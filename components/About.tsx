'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id='about'
      className='section'>
      <div className='container grid md:grid-cols-2 gap-10 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-6'>
          <h2 className='text-3xl md:text-4xl font-bold'>About Me</h2>
          <span className='underline-gradient' />
          <p className='text-white/70'>
            I began my coding journey in 2024 through The Last Mile program,
            where I quickly discovered a passion for building meaningful
            software. Since then, I’ve delivered full‑stack applications across
            a range of technologies, with a focus on clean architecture,
            responsive design, and user‑centered experiences. I’m committed to
            open source and to using technology to create measurable impact.
            Keeping pace with a fast‑moving industry can be demanding, but I
            thrive in it—because when you love the craft, the work is
            effortless.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='glass p-8'>
          <ul className='grid sm:grid-cols-2 gap-4 text-sm'>
            <li className='ring-1 ring-white/10 rounded-xl p-4'>
              Full‑stack web apps
            </li>
            <li className='ring-1 ring-white/10 rounded-xl p-4'>
              Performance‑minded
            </li>
            <li className='ring-1 ring-white/10 rounded-xl p-4'>
              UI/UX enthusiast
            </li>
            <li className='ring-1 ring-white/10 rounded-xl p-4'>
              Loves delightful details
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
