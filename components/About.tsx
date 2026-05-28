'use client';

import { about } from '@/lib/content';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 md:px-20 md:py-32">
      <div className="mx-auto max-w-container">
        <Reveal>
          <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-text-2">
            <span className="text-accent">{about.eyebrowNum} ·</span> {about.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-4xl font-bold leading-[1.1] tracking-tighter2 text-[clamp(2rem,4vw,3rem)]">
            {about.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal delay={0.16}>
            <div className="text-sm font-medium uppercase tracking-[0.14em] text-text-3 md:text-right">
              <div>The story</div>
            </div>
          </Reveal>

          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.2 + i * 0.06}>
                <p className="text-[17px] leading-[1.75] text-text-2">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.45}>
              <div className="mt-6 flex flex-wrap gap-2">
                {about.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-bg-elev px-3 py-1.5 text-xs font-medium text-text-2 transition-colors hover:border-border-strong hover:text-text"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
