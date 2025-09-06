import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'sans-serif'],
      },
      colors: {
        base: { 100: '#000d22ff', 200: '#142e5c' }, // deep blue shades
        accent: {
          blue: '#1e3a8a', // logo blue
          gold: '#ffd700', // logo gold/yellow
          white: '#ffffff', // logo white
        },
      },
      boxShadow: { soft: '0 10px 30px -10px rgba(0,0,0,0.4)' },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(1200px 600px at 0% 0%, rgba(30,58,138,.25), transparent 60%), radial-gradient(1200px 600px at 100% 100%, rgba(255,215,0,.15), transparent 60%)',
        grid: 'linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)',
      },
      backgroundSize: { grid: '40px 40px' },
    },
  },
  plugins: [],
};
export default config;
