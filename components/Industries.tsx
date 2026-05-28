'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { industries, accentClasses, AccentName } from '@/lib/content';
import { Reveal } from './Reveal';

type ItemId = (typeof industries.items)[number]['id'];
const DEFAULT_ACTIVE: ItemId = 'gaming';

export function Industries() {
  const [active, setActive] = useState<ItemId>(DEFAULT_ACTIVE);
  const reduce = useReducedMotion();

  return (
    <section id="industries" className="relative px-5 py-24 md:px-20 md:py-32">
      <div className="mx-auto max-w-container">
        <Reveal>
          <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-text-2">
            <span className="text-accent">{industries.eyebrowNum} ·</span> {industries.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-4xl font-bold leading-[1.1] tracking-tighter2 text-[clamp(2rem,4vw,3rem)]">
            {industries.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.65] text-text-2">
            {industries.subhead}
          </p>
        </Reveal>

        {/* ============ Desktop: horizontal accordion ============ */}
        <Reveal delay={0.24}>
          <div className="mt-14 hidden gap-4 md:flex md:h-[560px] lg:h-[520px]">
            {industries.items.map((item) => {
              const isActive = active === item.id;
              const a = accentClasses[item.accent as AccentName];
              return (
                <motion.article
                  key={item.id}
                  onMouseEnter={() => setActive(item.id as ItemId)}
                  onFocus={() => setActive(item.id as ItemId)}
                  tabIndex={0}
                  animate={{ flexGrow: isActive ? 4 : 1 }}
                  transition={{ duration: reduce ? 0 : 0.55, ease: [0.2, 0.7, 0.2, 1] }}
                  className={`group relative overflow-hidden rounded-2xl border bg-bg-card outline-none transition-colors focus-visible:border-text-2 ${
                    isActive ? `border-border-strong ${a.glow}` : 'cursor-pointer border-border hover:border-border-strong'
                  }`}
                  style={{ flexBasis: 0, minWidth: 140 }}
                >
                  {/* Top-edge accent line */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${a.via} to-transparent opacity-60`}
                  />
                  {/* Radial accent glow that intensifies when active */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${cssColorFor(item.accent as AccentName)}, transparent 60%)`,
                    }}
                    animate={{ opacity: isActive ? 0.18 : 0.05 }}
                    transition={{ duration: 0.4 }}
                  />

                  <AnimatePresence mode="wait" initial={false}>
                    {isActive ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.12, duration: 0.3 } }}
                        exit={{ opacity: 0, transition: { duration: 0.12 } }}
                        className="relative flex h-full flex-col gap-5 p-8 lg:p-10"
                      >
                        <div className="flex items-center justify-between">
                          <EmojiBadge emoji={item.emoji} accent={a} size="lg" />
                          <span className="font-mono text-xs text-text-3">{item.years}</span>
                        </div>

                        <div>
                          <div className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${a.text}`}>
                            {item.label}
                          </div>
                          <p className="mt-2 text-base italic text-text-2">{item.tagline}</p>
                        </div>

                        <div className="space-y-4 overflow-y-auto pr-1">
                          {item.story.map((para, i) => (
                            <p key={i} className="text-[15px] leading-[1.7] text-text-2">
                              {para}
                            </p>
                          ))}
                        </div>

                        <div className="mt-auto space-y-3">
                          <div className="flex flex-wrap gap-2">
                            {item.proof.map((p) => (
                              <span
                                key={p}
                                className={`rounded-md border ${a.border} bg-bg/40 px-2.5 py-1 font-mono text-[11px] ${a.text}`}
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                          <div className="border-t border-border pt-3 text-xs font-medium text-text-3">
                            {item.companies}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.25 } }}
                        exit={{ opacity: 0, transition: { duration: 0.1 } }}
                        className="relative flex h-full flex-col items-center justify-between gap-6 px-4 py-8 text-center"
                      >
                        <EmojiBadge emoji={item.emoji} accent={a} size="lg" />
                        <div className="flex flex-1 flex-col items-center justify-center gap-2">
                          <div className={`text-[15px] font-semibold uppercase tracking-[0.18em] ${a.text}`}>
                            {item.label}
                          </div>
                          <div className="px-1 text-[12px] leading-snug text-text-3">
                            {item.tagline}
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <span className="font-mono text-[10px] text-text-3">{item.years}</span>
                          <span className="font-mono text-[10px] text-text-3 opacity-60">hover →</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </Reveal>

        {/* hint line under the accordion */}
        <Reveal delay={0.32}>
          <div className="mt-4 hidden items-center gap-2 font-mono text-[11px] text-text-3 md:flex">
            <span className="inline-block h-px w-6 bg-border" />
            hover any card to expand. the last one you opened stays open
          </div>
        </Reveal>

        {/* ============ Mobile: stacked cards, each reveals on scroll ============ */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:hidden">
          {industries.items.map((item, idx) => {
            const a = accentClasses[item.accent as AccentName];
            return (
              <Reveal key={item.id} delay={idx * 0.08} as="article">
                <article
                  className={`relative overflow-hidden rounded-2xl border border-border bg-bg-card p-6 ${a.glow}`}
                >
                  {/* Top-edge accent line */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${a.via} to-transparent opacity-60`}
                  />
                  <div className="flex items-center justify-between">
                    <EmojiBadge emoji={item.emoji} accent={a} size="md" />
                    <span className="font-mono text-[11px] text-text-3">{item.years}</span>
                  </div>
                  <div className={`mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] ${a.text}`}>
                    {item.label}
                  </div>
                  <p className="mt-1 text-sm italic text-text-2">{item.tagline}</p>
                  <div className="mt-4 space-y-3">
                    {item.story.map((p, i) => (
                      <p key={i} className="text-[14px] leading-[1.7] text-text-2">
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.proof.map((p) => (
                      <span
                        key={p}
                        className={`rounded-md border ${a.border} bg-bg/40 px-2.5 py-1 font-mono text-[11px] ${a.text}`}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-border pt-3 text-xs font-medium text-text-3">
                    {item.companies}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Small badge wrapping an emoji "logo" so it reads as intentional + sized consistently. */
function EmojiBadge({
  emoji,
  accent,
  size = 'md',
}: {
  emoji: string;
  accent: { text: string; border: string };
  size?: 'md' | 'lg';
}) {
  const dims = size === 'lg' ? 'h-12 w-12 text-2xl' : 'h-11 w-11 text-xl';
  return (
    <div
      className={`grid ${dims} place-items-center rounded-xl border ${accent.border} bg-bg`}
      style={{ lineHeight: 1 }}
    >
      <span aria-hidden style={{ filter: 'saturate(1.05)' }}>
        {emoji}
      </span>
    </div>
  );
}

function cssColorFor(accent: AccentName): string {
  const map: Record<AccentName, string> = {
    violet: 'rgba(167, 139, 250, 0.9)',
    cyan:   'rgba(0, 217, 255, 0.9)',
    green:  'rgba(16, 185, 129, 0.9)',
    amber:  'rgba(245, 158, 11, 0.9)',
    pink:   'rgba(236, 72, 153, 0.9)',
    muted:  'rgba(113, 113, 122, 0.5)',
  };
  return map[accent];
}
