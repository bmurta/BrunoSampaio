import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bruno Sampaio — Quality Engineering Leader',
  description:
    'Engineering leader with 9+ years scaling quality orgs across gaming, fintech, and real estate. Toronto, ON.',
  openGraph: {
    title: 'Bruno Sampaio',
    description:
      'Engineering leader with 9+ years scaling quality orgs across gaming, fintech, and real estate.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans ambient-bg">{children}</body>
    </html>
  );
}
