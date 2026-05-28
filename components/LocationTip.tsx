'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Inline "tooltip" that shows a small world map with a pulsing pin at
 * Salvador, Brazil. Triggered by hover, focus, and touch.
 *
 * Used to wrap the word "Salvador, Brazil" in the hero subhead.
 */
export function LocationTip({ label }: { label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="m-0 cursor-help border-0 border-b border-dotted border-text-3 bg-transparent p-0 text-inherit text-text outline-none transition-colors hover:border-accent focus-visible:border-accent"
      >
        {label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.2, 0.7, 0.2, 1] }}
            className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 block w-[320px] max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-xl border border-border-strong bg-bg-card p-3 shadow-2xl shadow-black/40"
            role="tooltip"
          >
            <WorldMap />
            <span className="mt-2 flex items-center justify-between font-mono text-[10px]">
              <span className="text-text-3">SALVADOR, BRAZIL</span>
              <span className="text-accent">12.97°S 38.51°W</span>
            </span>
            <span
              aria-hidden
              className="absolute -top-1.5 left-1/2 block h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-border-strong bg-bg-card"
            />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

/**
 * Hand-drawn simplified world map in equirectangular projection.
 *
 * Coordinate system: viewBox 0 0 1000 500
 *   x = (longitude + 180) * (1000 / 360)
 *   y = (90 - latitude) * (500 / 180)
 *
 * Salvador (12.97°S, 38.51°W) → x ≈ 393, y ≈ 286
 */
function WorldMap() {
  return (
    <span className="block overflow-hidden rounded-lg border border-border bg-bg">
      <svg viewBox="0 0 1000 500" className="block h-auto w-full" preserveAspectRatio="xMidYMid meet">
        {/* Ocean background */}
        <rect width="1000" height="500" fill="#0A0A0F" />

        {/* Very subtle grid */}
        <defs>
          <pattern id="wmGrid" width="55.5" height="55.5" patternUnits="userSpaceOnUse">
            <path d="M 55.5 0 L 0 0 0 55.5" fill="none" stroke="#1F1F26" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="1000" height="500" fill="url(#wmGrid)" />

        {/* Equator + Tropic of Capricorn (Salvador sits just below the equator, near the Tropic) */}
        <line x1="0" y1="250" x2="1000" y2="250" stroke="#27272F" strokeWidth="0.6" strokeDasharray="3 6" />
        <line x1="0" y1="315" x2="1000" y2="315" stroke="#27272F" strokeWidth="0.4" strokeDasharray="2 8" />

        {/* ============ CONTINENTS ============ */}
        <g fill="#2A2A33" stroke="#3F3F46" strokeWidth="0.5" strokeLinejoin="round">
          {/* North America */}
          <path d="M 67 53 Q 175 50 280 60 Q 350 90 355 118 Q 333 135 308 140 Q 290 165 285 180 Q 278 175 273 178 Q 278 200 282 225 Q 270 232 268 228 Q 240 215 220 200 Q 205 195 200 190 Q 200 180 195 170 Q 175 155 155 140 Q 150 120 148 108 Q 138 95 128 90 Q 80 75 40 68 Q 50 58 67 53 Z" />

          {/* Greenland */}
          <path d="M 378 83 Q 425 70 445 55 L 440 19 Q 400 15 380 30 Q 365 40 361 55 Q 370 70 378 83 Z" />

          {/* South America — eastern bulge passes through Salvador's coordinates */}
          <path d="M 292 219 Q 320 215 333 222 Q 375 235 403 264 Q 400 275 394 286 Q 388 302 383 314 Q 370 325 358 333 Q 348 343 339 347 Q 325 375 314 403 Q 305 395 297 367 Q 300 335 306 314 Q 290 295 286 283 Q 280 270 278 258 Q 279 252 281 247 Q 285 232 292 219 Z" />

          {/* Eurasia */}
          <path d="M 567 53 Q 700 50 992 69 Q 970 90 944 97 Q 905 135 856 153 L 836 164 Q 820 180 817 189 Q 800 210 794 222 L 789 247 Q 780 235 767 210 L 753 189 L 722 214 Q 714 228 714 228 L 696 205 L 686 181 L 658 175 L 625 217 L 619 214 L 589 167 L 561 144 L 550 139 L 511 131 L 486 150 L 475 136 L 503 111 Q 520 100 528 94 L 514 83 Q 540 70 567 53 Z" />

          {/* Africa */}
          <path d="M 481 158 Q 470 180 453 211 Q 470 225 475 233 L 508 233 L 525 239 L 528 253 Q 530 270 536 283 Q 545 315 550 344 L 556 347 Q 575 340 586 333 L 597 314 Q 605 295 608 269 L 625 244 Q 642 225 642 219 Q 635 215 631 219 L 608 208 L 603 197 Q 595 180 592 175 L 589 167 Q 575 160 569 161 L 528 147 L 508 147 L 486 150 L 481 158 Z" />

          {/* Australia */}
          <path d="M 861 283 Q 880 278 897 281 Q 903 290 903 297 Q 920 310 925 325 Q 925 335 919 344 Q 910 355 903 356 Q 890 352 883 347 Q 860 348 839 344 Q 820 343 822 339 Q 815 325 817 311 Q 825 302 839 300 Q 850 292 861 283 Z" />

          {/* Antarctica — strip along the bottom */}
          <path d="M 30 450 Q 250 432 500 432 Q 750 432 970 450 L 970 495 L 30 495 Z" />

          {/* Small recognizable islands for context */}
          {/* UK */}
          <path d="M 489 90 L 506 95 L 502 118 L 488 116 Z" />
          {/* Ireland */}
          <path d="M 470 100 L 483 103 L 480 118 L 470 115 Z" />
          {/* Iceland */}
          <path d="M 461 73 L 472 75 L 470 82 L 459 80 Z" />
          {/* Japan (Honshu + Kyushu) */}
          <path d="M 884 135 L 902 148 L 905 168 L 887 160 Z" />
          <path d="M 876 170 L 884 178 L 880 185 L 874 180 Z" />
          {/* Madagascar */}
          <path d="M 622 290 L 633 300 L 631 325 L 620 320 Z" />
          {/* Sri Lanka */}
          <path d="M 720 232 L 727 235 L 725 243 L 720 240 Z" />
          {/* Indonesia (Sumatra + Java) */}
          <path d="M 770 240 L 800 250 L 820 260 L 805 275 L 780 265 L 770 250 Z" />
          {/* Borneo */}
          <path d="M 825 235 L 845 240 L 850 260 L 830 260 L 822 245 Z" />
          {/* Philippines */}
          <path d="M 855 215 L 870 225 L 865 245 L 853 235 Z" />
          {/* New Zealand */}
          <path d="M 968 355 L 982 365 L 978 375 L 967 367 Z" />
          <path d="M 980 378 L 990 385 L 988 392 L 980 388 Z" />
          {/* Cuba */}
          <path d="M 280 200 L 305 203 L 303 211 L 280 207 Z" />
        </g>

        {/* Crosshair at Salvador */}
        <g stroke="#00D9FF" strokeWidth="0.6" opacity="0.3">
          <line x1="393" y1="260" x2="393" y2="312" />
          <line x1="367" y1="286" x2="419" y2="286" />
        </g>

        {/* Pulsing pin at Salvador (12.97°S 38.51°W → 393, 286) */}
        <g transform="translate(393, 286)">
          <circle r="22" fill="#00D9FF" opacity="0.12">
            <animate attributeName="r" values="22;32;22" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.12;0.02;0.12" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle r="10" fill="#00D9FF" opacity="0.3">
            <animate attributeName="r" values="10;16;10" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.08;0.3" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle r="5" fill="#00D9FF" />
          <circle r="2" fill="#0A0A0F" />
        </g>

        {/* Corner tick marks (tactical readout) */}
        <g stroke="#3F3F46" strokeWidth="1.5" fill="none">
          <path d="M 16 16 L 32 16 M 16 16 L 16 32" />
          <path d="M 984 16 L 968 16 M 984 16 L 984 32" />
          <path d="M 16 484 L 32 484 M 16 484 L 16 468" />
          <path d="M 984 484 L 968 484 M 984 484 L 984 468" />
        </g>
      </svg>
    </span>
  );
}
