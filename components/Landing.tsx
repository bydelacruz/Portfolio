import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Landing({ onEnter }: { onEnter: () => void }) {
  const [exiting, setExiting] = useState(false);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onEnter, 700); // match animation duration
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.section
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className='fixed inset-0 z-50 w-full h-full flex flex-col items-center justify-center bg-base-100'>
          <img
            src='/images/transparentlogo.PNG'
            alt='Logo'
            className='h-64 w-64 object-contain drop-shadow-2xl mb-8'
          />
          <button
            onClick={handleEnter}
            className='px-8 py-4 rounded-xl bg-accent-gold text-base-100 font-bold text-xl shadow-lg hover:bg-accent-blue transition-all duration-300'>
            Enter
          </button>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
