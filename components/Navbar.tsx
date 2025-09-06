'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = navItems[0].id;
      for (let i = 0; i < navItems.length; i++) {
        const el = document.getElementById(navItems[i].id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            current = navItems[i].id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hamburger/close button for mobile
  const Hamburger = (
    <button
      className='md:hidden fixed top-6 right-6 z-[100] p-2 rounded-lg bg-base-100 border border-accent-gold/30 shadow-lg'
      aria-label={open ? 'Close menu' : 'Open menu'}
      onClick={() => setOpen((o) => !o)}>
      {open ? (
        <>
          <span className='block w-6 h-0.5 bg-accent-gold mb-1 rotate-45 translate-y-1' />
          <span className='block w-6 h-0.5 bg-accent-gold -rotate-45 -translate-y-1' />
        </>
      ) : (
        <>
          <span className='block w-6 h-0.5 bg-accent-gold mb-1' />
          <span className='block w-6 h-0.5 bg-accent-gold mb-1' />
          <span className='block w-6 h-0.5 bg-accent-gold' />
        </>
      )}
    </button>
  );

  return (
    <>
      {Hamburger}
      {/* Desktop navbar */}
      <motion.nav
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        transition={{ type: 'spring', stiffness: 120, damping: 16 }}
        className='hidden md:flex fixed top-32 right-0 h-[70vh] w-32 bg-base-100/80 backdrop-blur-lg border-l border-accent-gold/30 rounded-l-3xl shadow-2xl flex-col items-center justify-center gap-8 z-50'>
        {navItems.map((item, idx) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link${active === item.id ? ' active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              if (idx === 0) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActive(item.id);
              } else {
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  setActive(item.id);
                }
              }
            }}>
            {item.label}
          </a>
        ))}
      </motion.nav>
      {/* Mobile slide-out menu */}
      <motion.nav
        initial={false}
        animate={open ? { x: 0 } : { x: 350 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className='md:hidden fixed top-0 right-0 h-screen w-64 bg-base-100/95 backdrop-blur-lg border-l border-accent-gold/30 shadow-2xl flex flex-col items-center justify-center gap-8 z-50'
        style={{ pointerEvents: open ? 'auto' : 'none' }}>
        {navItems.map((item, idx) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link${active === item.id ? ' active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              if (idx === 0) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActive(item.id);
              } else {
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  setActive(item.id);
                }
              }
            }}>
            {item.label}
          </a>
        ))}
      </motion.nav>
      <style jsx>{`
        .nav-link {
          display: block;
          color: #ffd700;
          font-size: 1rem;
          font-weight: 500;
          text-align: center;
          margin: 0.5rem 0;
          transition: color 0.2s, transform 0.2s;
        }
        .nav-link:hover {
          color: #1e3a8a;
          transform: scale(1.08);
        }
        .nav-link.active {
          color: #fff;
          font-weight: 700;
          border-right: 4px solid #ffd700;
          padding-right: 0.5rem;
        }
      `}</style>
    </>
  );
}
