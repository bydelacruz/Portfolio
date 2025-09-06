'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>(
    'idle'
  );
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }
  return (
    <section
      id='contact'
      className='section'>
      <div className='container'>
        <div className='mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold'>Contact</h2>
          <span className='underline-gradient mt-4' />
        </div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='glass p-6 grid md:grid-cols-2 gap-6'>
          <div className='grid gap-2'>
            <label className='text-sm text-white/70'>Name</label>
            <input
              name='name'
              required
              placeholder='Your name'
              className='bg-white/5 rounded-lg px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/30'
            />
          </div>
          <div className='grid gap-2'>
            <label className='text-sm text-white/70'>Email</label>
            <input
              type='email'
              name='email'
              required
              placeholder='you@example.com'
              className='bg-white/5 rounded-lg px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/30'
            />
          </div>
          <div className='md:col-span-2 grid gap-2'>
            <label className='text-sm text-white/70'>Message</label>
            <textarea
              name='message'
              required
              rows={5}
              placeholder='Tell me about your project...'
              className='bg-white/5 rounded-lg px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/30'
            />
          </div>
          <div className='md:col-span-2 flex items-center gap-4'>
            <button
              disabled={status === 'loading'}
              className='px-5 py-3 rounded-xl bg-accent.teal/90 hover:bg-accent.teal transition shadow-soft'>
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'sent' && (
              <span className='text-sm text-accent.teal'>
                Message sent! I’ll reply soon.
              </span>
            )}
            {status === 'error' && (
              <span className='text-sm text-red-400'>
                Something went wrong. Please try again.
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
