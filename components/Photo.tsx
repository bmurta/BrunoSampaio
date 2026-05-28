'use client';

import { useState } from 'react';

/**
 * Hero photo with a graceful fallback.
 *
 * Drop your image at  public/profile.jpg  and it will be picked up.
 * If the file is missing, a stylized "BS" initial card renders instead so
 * the hero layout never looks broken.
 *
 * Recommended source image:
 *   - 800x1000 (4:5) or square at 1:1
 *   - JPG/WebP, ≤300KB
 *   - face roughly centered, looks good at small sizes
 */
export function Photo() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative">
      {/* Decorative glow — warm tones to harmonize with golden-hour photos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-5 rounded-3xl bg-gradient-to-br from-amber/20 via-pink/15 to-violet/15 blur-3xl"
      />
      <CornerBracket className="-top-2 -left-2" />
      <CornerBracket className="-top-2 -right-2 rotate-90" />
      <CornerBracket className="-bottom-2 -left-2 -rotate-90" />
      <CornerBracket className="-bottom-2 -right-2 rotate-180" />

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border-strong bg-bg-elev">
        {!errored ? (
          /* Plain <img> instead of next/image — works in static export without config */
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/profile.jpg"
            alt="Bruno Sampaio"
            className="h-full w-full object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          <FallbackCard />
        )}
        {/* Subtle bottom vignette so caption below has breathing room */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(10,10,15,0.55), transparent 60%)',
          }}
        />
      </div>
    </div>
  );
}

function CornerBracket({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`absolute text-text-3 ${className ?? ''}`}
    >
      <path d="M2 8V2H8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function FallbackCard() {
  return (
    <div className="relative grid h-full w-full place-items-center bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(245,158,11,0.18),transparent_60%),radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(236,72,153,0.18),transparent_60%)]">
      <div className="text-center">
        <div className="font-extrabold tracking-tightest text-[120px] leading-none">
          <span className="text-amber">B</span>
          <span className="text-pink">S</span>
        </div>
        <div className="mt-3 font-mono text-[11px] text-text-3">
          drop your photo at <span className="text-text-2">/public/profile.jpg</span>
        </div>
      </div>
    </div>
  );
}
