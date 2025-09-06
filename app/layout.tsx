import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Benjamin Delacruz — Developer Portfolio',
  description:
    'Developer portfolio built with Next.js, Tailwind, and Framer Motion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
