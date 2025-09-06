'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='section'>
      <div className='container grid md:grid-cols-2 gap-10 items-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-6'>
          <p className='text-sm uppercase tracking-widest text-white/60'>
            Benjamin Delacruz
          </p>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
            Transforming ideas into impactful solutions{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-accent.indigo via-accent.teal to-accent.violet'>
              with creativity, precision, and purpose.
            </span>
          </h1>
          <p className='text-white/70 max-w-prose'>
            Full‑stack developer focused on clean architecture, smooth
            micro‑interactions, and shipping useful products.
          </p>
          <div className='flex gap-4'>
            <a
              href='#projects'
              className='px-5 py-3 rounded-xl bg-accent.indigo/90 hover:bg-accent.indigo transition shadow-soft'>
              See Projects
            </a>
            <a
              href='#contact'
              className='px-5 py-3 rounded-xl ring-1 ring-white/20 hover:ring-white/40 transition'>
              Get in touch
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='relative glass p-6 overflow-hidden'>
          <div className='absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-tr from-accent.indigo via-accent.teal to-accent.violet blur-3xl opacity-30' />
          <div className='relative grid gap-4'>
            <div className='aspect-square w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10'>
              <Image
                src='/images/IMG_2029.jpg'
                alt='Benjamin Delacruz'
                width={800}
                height={800}
                className='w-full h-full object-cover'
                priority
              />
            </div>
            <p className='text-xs text-white/60 text-center'>
              Hi — I’m Ben. Let’s build something meaningful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
