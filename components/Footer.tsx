export default function Footer() {
  return (
    <footer className='container py-10 text-xs text-white/60'>
      <div className='underline-gradient mb-4' />
      <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
        <p>&copy; {new Date().getFullYear()} • Benjamin Delacruz</p>
        <div className='flex gap-5'>
          <a
            href='https://github.com/bydelacruz'
            target='_blank'
            className='hover:text-accent.teal'>
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/benjamin-delacruz-a84408374/'
            target='_blank'
            className='hover:text-accent.indigo'>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
