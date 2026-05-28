'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#industries', label: 'Industries' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 py-4 backdrop-blur-md backdrop-saturate-150 transition-colors duration-300 ${
        scrolled ? 'bg-bg/85 border-b border-border' : 'bg-bg/60 border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-6 px-5 md:px-20">
        <a href="#top" className="text-[15px] font-bold tracking-[0.1em]">
          BRUNO <span className="text-accent">↗</span>
        </a>
        <div className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-2 transition-colors hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-[13px] font-semibold text-bg transition-all hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(0,217,255,0.25)] hover:brightness-110"
        >
          Resume <span>↓</span>
        </a>
      </div>
    </nav>
  );
}
