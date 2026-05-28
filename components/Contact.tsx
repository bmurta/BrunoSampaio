'use client';

import { contact } from '@/lib/content';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact" className="relative px-5 py-28 md:px-20 md:py-36">
      <div className="mx-auto max-w-container">
        <Reveal>
          <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-text-2">
            <span className="text-accent">{contact.eyebrowNum} ·</span> {contact.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-4 font-extrabold leading-[1.04] tracking-tightest text-[clamp(2.5rem,6.5vw,4.75rem)]">
            {contact.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.65] text-text-2">
            {contact.subhead}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {contact.cards.map((c, i) => (
            <Reveal key={c.label} delay={0.2 + i * 0.06}>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener' : undefined}
                className="group flex flex-col gap-2 rounded-2xl border border-border bg-bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:bg-bg-elev"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-3">
                  {c.label}
                </span>
                <span className="flex items-center gap-2 text-lg font-semibold text-text">
                  {c.value}
                  <span className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    {c.icon}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
