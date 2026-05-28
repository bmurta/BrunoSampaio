'use client';

import { motion } from 'framer-motion';
import { hero } from '@/lib/content';
import { Reveal } from './Reveal';
import { Photo } from './Photo';
import { LocationTip } from './LocationTip';

export function Hero() {
  return (
    <section id="top" className="relative px-5 pt-32 pb-20 md:px-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.45fr_1fr] lg:items-center lg:gap-16">
          {/* ============ Left column: text ============ */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-card px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-text-2">
                <PulseDot />
                {hero.pill}
              </span>
            </Reveal>

            {/* Headline — two lines, with rhythm. "ten years" is the visual anchor. */}
            <Reveal delay={0.08}>
              <h1 className="mt-7 font-extrabold leading-[1.05] tracking-tightest text-[clamp(1.875rem,4.6vw,3.5rem)]">
                <span className="block">
                  {hero.headline.line1Prefix}
                  <span className="text-violet">{hero.headline.line1Highlight}</span>
                  {hero.headline.line1Suffix}
                </span>
                <span className="mt-1 block">
                  {hero.headline.line2Prefix}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">{hero.headline.line2HighlightYears}</span>
                    <svg
                      aria-hidden
                      viewBox="0 0 220 12"
                      className="absolute -bottom-1 left-0 z-0 h-2 w-full text-accent/40"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M3 8 C 60 2, 160 2, 217 6"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  {hero.headline.line2Mid}
                  <span className="text-green">{hero.headline.line2HighlightVerb}</span>
                  {hero.headline.line2Suffix}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.7] text-text-2">
                {hero.subhead.before}
                <LocationTip label={hero.subhead.place} />
                {hero.subhead.after}
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-4 font-mono text-[12px] text-text-3">{hero.signature}</div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-wrap gap-3">
                {hero.ctas.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className={
                      c.primary
                        ? 'inline-flex items-center gap-2 rounded-[10px] bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-all hover:-translate-y-px hover:shadow-[0_12px_32px_rgba(0,217,255,0.3)] hover:brightness-110'
                        : 'inline-flex items-center gap-2 rounded-[10px] border border-border-strong bg-transparent px-6 py-3.5 text-sm font-semibold text-text transition-all hover:-translate-y-px hover:border-text-2 hover:bg-bg-card'
                    }
                  >
                    {c.label} <span>{c.icon}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ============ Right column: photo ============ */}
          <Reveal delay={0.2} className="relative mx-auto w-full max-w-[360px] lg:max-w-none lg:justify-self-end">
            <Photo />
            <div className="mt-4 flex items-start justify-between gap-3 font-mono text-[11px]">
              <div className="text-text-3">
                <div>{hero.photoMeta.location}</div>
                <div className="mt-1 text-text-2">{hero.photoMeta.role}</div>
              </div>
              <div className="hidden text-right text-text-3 sm:block">
                <div>{hero.photoMeta.aside}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PulseDot() {
  return (
    <motion.span
      className="block h-2 w-2 rounded-full bg-green"
      animate={{ boxShadow: ['0 0 0 0 rgba(16,185,129,0.6)', '0 0 0 12px rgba(16,185,129,0)', '0 0 0 0 rgba(16,185,129,0)'] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  );
}
