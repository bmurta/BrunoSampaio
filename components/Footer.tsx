'use client';

import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="border-t border-border px-5 py-12 md:px-20">
      <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-4 text-[13px] text-text-3">
        <div>
          © {year ?? ''} Bruno Murta Sampaio · Toronto, ON ·{' '}
          <span className="text-text-2">b.murta.sampaio@gmail.com</span>
        </div>
        <div className="font-mono text-[11px] tracking-[0.05em]">
          built with React, Tailwind, Framer Motion · and a lot of coffee
        </div>
      </div>
    </footer>
  );
}
