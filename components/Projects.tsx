'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { projects, accentClasses, AccentName } from '@/lib/content';
import { Reveal } from './Reveal';

type ProjectItem = (typeof projects.items)[number];

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-24 md:px-20 md:py-32">
      <div className="mx-auto max-w-container">
        <Reveal>
          <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-text-2">
            <span className="text-accent">{projects.eyebrowNum} ·</span> {projects.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-4xl font-bold leading-[1.1] tracking-tighter2 text-[clamp(2rem,4vw,3rem)]">
            {projects.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.65] text-text-2">
            {projects.subhead}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.items.map((item, idx) => (
            <Reveal key={item.id} delay={Math.min(idx * 0.06, 0.3)} as="article">
              <ProjectCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ item }: { item: ProjectItem }) {
  const a = accentClasses[item.accent as AccentName];

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:-translate-y-1 hover:border-border-strong ${a.glow}`}
    >
      <ProjectMedia item={item} />

      {/* Top-edge accent line */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${a.via} to-transparent opacity-70`}
      />

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <span className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${a.text}`}>
            {item.kicker}
          </span>
          <span className="font-mono text-[11px] text-text-3">{item.years}</span>
        </div>

        <h3 className="text-[20px] font-semibold leading-tight tracking-[-0.012em] text-text">
          {item.title}
        </h3>

        <div className="text-[12px] font-medium text-text-3">{item.company}</div>

        <p className="text-[14.5px] leading-[1.65] text-text-2">{item.description}</p>

        {item.links && item.links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-3">
            {item.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg/40 px-2.5 py-1.5 font-mono text-[11px] text-text-2 transition-all hover:border-border-strong hover:bg-bg-elev hover:text-text"
              >
                <span>{l.label}</span>
                <span className={`${a.text}`}>{l.icon}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

/**
 * Project media slot.
 *
 * Layering (back to front):
 *   1. Gradient fallback with emoji + title  — always rendered; visible when nothing else loads
 *   2. <img>  — fades in if /projects/<id>.jpg exists
 *   3. <video> — fades in over the image when the card is "focused":
 *        - desktop: on hover
 *        - touch devices: when scrolled into the viewport (IntersectionObserver gated by pointer: coarse)
 *
 * Drop assets at:
 *   public/projects/<id>.jpg   — poster (always shown when not focused)
 *   public/projects/<id>.mp4   — short looped reel (muted)
 *
 * If a file is missing the layer above it silently fails and the layer beneath remains visible —
 * the card never looks broken.
 */
function ProjectMedia({ item }: { item: ProjectItem }) {
  const a = accentClasses[item.accent as AccentName];
  const accentBg = accentBgFor(item.accent as AccentName);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [imageErrored, setImageErrored] = useState(false);
  const [videoErrored, setVideoErrored] = useState(false);

  const hasVideo = Boolean(item.video) && !videoErrored;
  const shouldPlay = hasVideo && (hovered || inView);

  // Keep latest shouldPlay accessible inside event listeners.
  const shouldPlayRef = useRef(shouldPlay);
  shouldPlayRef.current = shouldPlay;

  // Idempotent play attempt — swallows AbortError / NotAllowedError quietly.
  const tryPlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (!shouldPlayRef.current) return;
    // Avoid kicking off play() if the video is already past Ended/Paused-after-ended:
    v.play().catch(() => {
      /* autoplay block, source not ready, or rapid pause race — fine, retry later */
    });
  }, []);

  // Drive play / pause off the shouldPlay state.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (shouldPlay) {
      tryPlay();
    } else {
      v.pause();
    }
  }, [shouldPlay, tryPlay]);

  // The first card in the grid is usually already in view when the page loads.
  // IntersectionObserver fires before the video element has buffered enough to
  // play, so the initial play() call gets dropped. We catch that case here by
  // retrying play() as soon as the video reaches a playable state. Also handles
  // late-arriving sources or stalls that recover.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !hasVideo) return;

    // If already past readyState 3 (HAVE_FUTURE_DATA), trigger immediately.
    if (v.readyState >= 3) tryPlay();

    v.addEventListener('canplay', tryPlay);
    v.addEventListener('loadeddata', tryPlay);
    return () => {
      v.removeEventListener('canplay', tryPlay);
      v.removeEventListener('loadeddata', tryPlay);
    };
  }, [hasVideo, tryPlay]);

  // Touch-device scroll-into-view trigger.
  // Gated by `pointer: coarse` so desktop scrolling doesn't trigger play.
  useEffect(() => {
    if (!hasVideo) return;
    const el = containerRef.current;
    if (!el) return;

    let isTouch = false;
    try {
      isTouch = window.matchMedia('(pointer: coarse)').matches;
    } catch {
      isTouch = false;
    }
    if (!isTouch) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasVideo]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative aspect-video w-full overflow-hidden bg-bg-elev"
    >
      {/* Layer 1: gradient fallback (always rendered, behind everything) */}
      <div className="absolute inset-0" style={{ background: accentBg }}>
        <div className="grid h-full w-full place-items-center">
          <div className="flex flex-col items-center gap-2 px-6 text-center">
            <span className="text-5xl drop-shadow-lg" aria-hidden>
              {item.emoji}
            </span>
            <span className={`font-mono text-[10px] font-semibold uppercase tracking-[0.16em] ${a.text}`}>
              {item.kicker}
            </span>
            <span className="max-w-[260px] text-sm font-medium text-text-2">{item.title}</span>
          </div>
        </div>
      </div>

      {/* Layer 2: poster image (fades in if loaded). object-cover keeps composition tight. */}
      {item.image && !imageErrored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.image}
          alt={`${item.title} screenshot`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={() => setImageErrored(true)}
        />
      )}

      {/* Layer 3: video (fades over image when shouldPlay). */}
      {hasVideo && (
        <video
          ref={videoRef}
          src={item.video}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            shouldPlay ? 'opacity-100' : 'opacity-0'
          }`}
          onError={() => setVideoErrored(true)}
        />
      )}

      {/* Subtle vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 70% at 50% 100%, rgba(10,10,15,0.35), transparent 60%)',
        }}
      />

      {/* Small monospace badge: "▶ HOVER TO PLAY" or "▶ IN VIEW" only when a video is present
          and currently not playing. Communicates the interaction without being noisy. */}
      {hasVideo && !shouldPlay && (
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/45 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-white/80 backdrop-blur-sm">
          <span className={`${a.text}`}>▶</span>
          <span>hover to play</span>
        </div>
      )}
    </div>
  );
}

function accentBgFor(accent: AccentName): string {
  const map: Record<AccentName, string> = {
    violet:
      'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(167,139,250,0.35), transparent 60%), radial-gradient(ellipse 80% 60% at 80% 80%, rgba(236,72,153,0.25), transparent 60%), #0F0F17',
    cyan:
      'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(0,217,255,0.30), transparent 60%), radial-gradient(ellipse 80% 60% at 80% 80%, rgba(167,139,250,0.20), transparent 60%), #0F0F17',
    green:
      'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(16,185,129,0.30), transparent 60%), radial-gradient(ellipse 80% 60% at 80% 80%, rgba(0,217,255,0.18), transparent 60%), #0F0F17',
    amber:
      'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(245,158,11,0.30), transparent 60%), #0F0F17',
    pink:
      'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(236,72,153,0.30), transparent 60%), #0F0F17',
    muted:
      'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(113,113,122,0.20), transparent 60%), #0F0F17',
  };
  return map[accent];
}
