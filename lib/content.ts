/**
 * All site copy lives here. Edit prose without touching components.
 * Written as first-person reflective narrative — rewrite anything that
 * doesn't sound like you. The bones (themes, structure) should stay;
 * the voice should be yours.
 */

export const hero = {
  pill: 'Open to leadership roles · Toronto, ON',
  // Headline is two warm lines. "Bruno" gets the violet accent, "ten years" gets
  // the cyan + underline treatment as the single visual moment.
  headline: {
    line1Prefix: "Hi, I'm ",
    line1Highlight: 'Bruno',
    line1Suffix: '.',
    line2Prefix: 'An engineering leader, ',
    line2HighlightYears: 'ten years',
    line2Mid: ' in.',
    line2HighlightVerb: '',
    line2Suffix: '',
  },
  // Subhead is segmented so "Salvador, Brazil" becomes a LocationTip hover target.
  subhead: {
    before: 'Based in Toronto, originally from ',
    place: 'Salvador, Brazil',
    after:
      ". I run quality engineering teams across gaming, fintech, and real estate, with one eye on what's next on the management side.",
  },
  signature: '- Bruno Sampaio',
  ctas: [
    { label: 'Get in touch', icon: '→', primary: true, href: '#contact' },
    { label: 'Resume', icon: '↓', primary: false, href: '#contact' },
  ],
  // monospace caption under the photo
  photoMeta: {
    location: 'TORONTO · 43.6532°N',
    role: 'Currently: QA Lead at Honeywell',
    aside: "↑ that's me",
  },
};

export const about = {
  eyebrowNum: '03',
  eyebrow: 'About',
  heading:
    "I'm the kid who used to take Super Nintendo controllers apart for fun.",
  paragraphs: [
    "I was seven when I started taking apart Super Nintendo controllers. By nine I'd put together my first PC from scavenged parts. Both projects taught me roughly the same thing: someone had decided where every piece went, and I wanted to know how to be one of those people. I've been chasing that ever since.",
    "My first paid job in tech was at LG in Salvador, manually testing the Brazilian-Portuguese builds of their phones. Three languages, hundreds of SKUs, very little glamour. I liked it. The job was deciding whether the software was actually ready to ship, and that decision mattered.",
    "Ten years on, I'm leading quality at Honeywell on a real-estate platform with millions of users. The thing I've kept liking about QA is that it gives you the clearest view of how a product actually works: where design decisions clash with engineering reality, where a feature ships clean in staging and breaks on a real device. That view ends up being useful pretty much everywhere.",
    "I don't want to be a QA Lead forever, though. The work I've been proudest of has been the work where I acted more as a translator: sitting between PM and engineering, turning vague concerns into something the team could act on. I'm looking for that next role now. Engineering management or product engineering leadership, where the cross-functional view I built in QA can shape what we ship next, not just sign off on it.",
  ],
  tags: ['Engineering Management', 'Quality Strategy', 'Cross-functional leadership', 'Mentorship', 'Toronto · open to remote', 'EN · PT · FR'],
};

export const industries = {
  eyebrowNum: '02',
  eyebrow: 'Where I’ve worked',
  heading: 'Three industries, three kinds of stakes.',
  subhead:
    "I keep ending up in spaces where quality actually matters. Hover any card to read more about each.",
  items: [
    {
      id: 'gaming',
      label: 'Gaming',
      accent: 'violet' as const,
      emoji: '🎮',
      tagline: 'live-service titles, player-first quality',
      story: [
        "In games, players decide if they like you in about five seconds. At Magic Media I ran an 8-person QA team across Unity and Unreal projects shipping to Sony, Microsoft, Nintendo, Epic, and Steam. Before that, at Wildlife Studios, I coordinated quality for live mobile games with over a million MAU.",
        "Gaming taught me quality isn't just a list of bugs found and fixed. A frame stutter that never shows up in a test plan can still be what makes someone quit. We ended up running QA alongside community managers rather than after them; the people answering Discord at 2am usually knew what was broken before our dashboards did.",
      ],
      proof: ['8-person QA team', 'Sony / MS / Nintendo / Epic / Steam', 'Sub-48h sev-1 SLA', '1M+ MAU live ops'],
      companies: 'Magic Media · Wildlife Studios',
      years: '2020 → 2024',
    },
    {
      id: 'fintech',
      label: 'Fintech',
      accent: 'cyan' as const,
      emoji: '🏦',
      tagline: 'regulated platforms with real consequences',
      story: [
        "At Cubos in Salvador I led a 12-person team that shipped Brazil's first Open Banking application. Design, engineering, and QA all reported through me. The regulatory pattern was being written while we built, with the central bank reviewing as we went.",
        "Fintech sits at the opposite end of the spectrum from gaming. A bad release isn't a refund; it's someone's salary not landing, a transfer that doesn't clear. That changes how you think about risk: less velocity, more attention to the cost of being wrong. The Cypress pipeline I built there eventually got us from monthly releases to weekly. Quiet infrastructure work that pays off later.",
      ],
      proof: ['12-person team', "Brazil's first Open Banking app", '0% → 88% automation coverage', 'Weekly release cadence'],
      companies: 'Cubos Tecnologia',
      years: '2019 → 2022',
    },
    {
      id: 'realestate',
      label: 'Real Estate',
      accent: 'green' as const,
      emoji: '🏢',
      tagline: 'platform scale with hardware in the loop',
      story: [
        "At Honeywell I lead QA for a North American real-estate platform with millions of users. Software, but with hardware in the loop: IoT devices in real buildings, sensors and thermostats that don't get over-the-air patches the way an app does.",
        "Hardware changes what 'fixing it' means. You can't ship-and-patch when the bug is in a device installed three years ago. That pushes quality upstream: into the spec, into procurement, into how you design something you may not be able to touch again. It's the most operationally serious work I've done.",
      ],
      proof: ['Millions of platform users', 'Mobile + IoT scope', '30+ API issues caught via load testing', 'Cross-functional with PM + eng leadership'],
      companies: 'Honeywell',
      years: '2024 → Now',
    },
  ],
};

export const projects = {
  eyebrowNum: '01',
  eyebrow: 'Projects',
  heading: "Some of what I've shipped.",
  subhead:
    "A non-exhaustive tour, in roughly reverse-chronological order. Real-estate platforms, mobile games with sizeable playerbases, and a few fintech projects.",
  items: [
    {
      id: 'brokerbay',
      title: 'BrokerBay / Supra One',
      years: 'Mar 2024 → Now',
      company: 'Honeywell',
      accent: 'green' as const,
      emoji: '🏢',
      kicker: 'REAL ESTATE',
      description:
        "BrokerBay is the showing management platform real estate brokerages use to coordinate listings, lockbox access, and the logistics of getting buyers into homes. I lead QA across mobile and the connected IoT lockbox side, on weekly release cycles. A regression here doesn't block one transaction; it blocks thousands. Officially renamed Supra One in early 2026.",
      image: '/projects/brokerbay.jpg',
      video: '/projects/brokerbay.mp4',
      links: [
        { label: 'brokerbay.com', href: 'https://www.brokerbay.com/', icon: '↗' },
        { label: 'Supra One on Play Store', href: 'https://play.google.com/store/apps/details?id=com.brokerbay.mobile', icon: '↗' },
      ],
    },
    {
      id: 'godforge',
      title: 'Godforge',
      years: '2023 → 2024',
      company: 'Fateless Games',
      accent: 'violet' as const,
      emoji: '🎮',
      kicker: 'GAMING',
      description:
        "Godforge is the cross-platform hero-collector RPG Fateless Games has been building. Community-first, 250+ collectible heroes, $22M raised across two rounds, now in Beta with 100K players. I came in during early concept and prototype as QA Lead, setting up the test strategy from scratch and mentoring the in-house testing team. Most of the work was shaping how a new studio thinks about quality before there's much to test.",
      image: '/projects/godforge.jpg',
      video: '/projects/godforge.mp4',
      links: [
        { label: 'godforge.gg', href: 'https://godforge.gg/', icon: '↗' },
        { label: 'fateless.gg', href: 'https://www.fateless.gg/game/godforge/', icon: '↗' },
      ],
    },
    {
      id: 'grendizer',
      title: 'UFO Robot Grendizer — The Feast of the Wolves',
      years: 'Mar 2023 → Nov 2023',
      company: 'Magic Media',
      accent: 'violet' as const,
      emoji: '🎮',
      kicker: 'GAMING',
      description:
        "A 3D action-adventure based on Go Nagai's Grendizer anime, published by Microids with Magic Media on production. I owned QA across the major gameplay modes: mech combat, vertical shoot-em-up sections, and the Spazer flying-module flow. Shipped to Steam and consoles. Sits at 84% positive on Steam, which is a solid landing for a licensed anime title.",
      image: '/projects/grendizer.jpg',
      video: '/projects/grendizer.mp4',
      links: [
        { label: 'Steam page', href: 'https://store.steampowered.com/app/2295970/UFO_ROBOT_GRENDIZER__The_Feast_of_the_Wolves/', icon: '↗' },
      ],
    },
    {
      id: 'marlim',
      title: 'Marlim.co',
      years: 'Mar 2021 → Jun 2022',
      company: 'Cubos Tecnologia',
      accent: 'cyan' as const,
      emoji: '🏦',
      kicker: 'FINTECH',
      description:
        "Marlim is a Brazilian payments platform that built the first installment credit-card and PIX rails for the currency-exchange market. I worked on the engineering side at Cubos. Clients included Nomad, Foxbit, and Western Union, with total payment volume growing from R$2M to over R$60M during my time on it.",
      image: '/projects/marlim.jpg',
      links: [
        { label: 'marlim.co', href: 'https://marlim.co/', icon: '↗' },
      ],
    },
    {
      id: 'suspects',
      title: 'Suspects: Mystery Mansion',
      years: 'Nov 2020 → Mar 2021',
      company: 'Wildlife Studios',
      accent: 'violet' as const,
      emoji: '🎮',
      kicker: 'GAMING',
      description:
        "Wildlife's social-deduction game; closest comparison is Among Us, but with voice chat built in from day one. I coordinated QA during the prototype-to-live transition. The voice chat layer was the hardest part of the job: keeping nine players in a stable cross-platform session while a round timer is running is a hard test to design.",
      image: '/projects/suspects.jpg',
      video: '/projects/suspects.mp4',
      links: [
        { label: 'Wildlife page', href: 'https://wildlifestudios.com/games/suspects/', icon: '↗' },
        { label: 'App Store', href: 'https://apps.apple.com/us/app/suspects-mystery-mansion/id1546088542', icon: '↗' },
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.wildlifestudios.free.online.games.suspects', icon: '↗' },
      ],
    },
    {
      id: 'tennis-clash',
      title: 'Tennis Clash: Multiplayer Game',
      years: 'May 2020 → Mar 2021',
      company: 'Wildlife Studios',
      accent: 'violet' as const,
      emoji: '🎮',
      kicker: 'GAMING',
      description:
        "Wildlife's flagship mobile sports game: real-time multiplayer tennis with short rallies designed for quick mobile sessions. 160M+ downloads, 4.6 stars. I coordinated QA across live events, seasonal content, and the matchmaking layer. Real-time multiplayer at that scale doesn't leave much room for error.",
      image: '/projects/tennis-clash.jpg',
      video: '/projects/tennis-clash.mp4',
      links: [
        { label: 'Wildlife page', href: 'https://wildlifestudios.com/games/tennis-clash/', icon: '↗' },
        { label: 'App Store', href: 'https://apps.apple.com/us/app/tennis-clash-sports-stars-game/id1346179411', icon: '↗' },
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.tfgco.games.sports.free.tennis.clash', icon: '↗' },
      ],
    },
    {
      id: 'zooba',
      title: 'Zooba: Zoo Battle Royale',
      years: 'May 2020 → Mar 2021',
      company: 'Wildlife Studios',
      accent: 'violet' as const,
      emoji: '🎮',
      kicker: 'GAMING',
      description:
        "Wildlife's mobile battle royale with zoo animals; a Battle Royale / MOBA mashup that did surprisingly well: 25M+ downloads, 20+ characters with distinct kits. I coordinated QA during peak live-ops and ran regression on new character launches. Same uptime bar as the rest of the portfolio.",
      image: '/projects/zooba.jpg',
      video: '/projects/zooba.mp4',
      links: [
        { label: 'Wildlife page', href: 'https://wildlifestudios.com/games/zooba/', icon: '↗' },
        { label: 'App Store', href: 'https://apps.apple.com/us/app/zooba-zoo-battle-royale-games/id1459402952', icon: '↗' },
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.wildlife.games.battle.royale.free.zooba', icon: '↗' },
      ],
    },
    {
      id: 'bbnk',
      title: 'BBNK',
      years: 'Mar 2019 → May 2020',
      company: 'Cubos Tecnologia',
      accent: 'cyan' as const,
      emoji: '🏦',
      kicker: 'FINTECH',
      description:
        "Brazil's first Open Banking application. Web in React, native Android in Kotlin, native iOS in Swift; all shipped before the regulatory spec was fully settled. I led a 12-person team across design, engineering, and QA, and built the Cypress pipeline that took us from monthly releases to weekly. The central bank reviewed every step.",
      image: '/projects/bbnk.jpg',
      links: [
        { label: 'Cubos case study', href: 'https://cases.cubos.io/case-bbnk.html', icon: '↗' },
      ],
    },
  ],
};

export const contact = {
  eyebrowNum: '04',
  eyebrow: 'Contact',
  heading: "Let's talk.",
  subhead:
    "I'm open to engineering management, quality leadership, and senior product roles, especially in gaming, fintech, or real-estate tech. Toronto-based, open to remote. Email is the fastest way to reach me.",
  cards: [
    {
      label: 'Email',
      value: 'bruno@sampaio.ca',
      href: 'mailto:bruno@sampaio.ca',
      icon: '↗',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/brunomurta',
      href: 'https://www.linkedin.com/in/brunomurta',
      icon: '↗',
      external: true,
    },
    {
      label: 'Resume',
      value: 'Download PDF',
      href: '/resume.pdf',
      icon: '↓',
    },
  ],
};

export type AccentName = 'violet' | 'cyan' | 'green' | 'amber' | 'pink' | 'muted';

/** Tailwind classes keyed by accent — kept centralized so changes propagate.
 *  All class strings are literal here so Tailwind's JIT scanner picks them up. */
export const accentClasses: Record<AccentName, { text: string; bg: string; via: string; border: string; glow: string }> = {
  violet: { text: 'text-violet',  bg: 'bg-violet',  via: 'via-violet',  border: 'border-violet/40',     glow: 'shadow-[0_0_60px_-15px_rgba(167,139,250,0.5)]' },
  cyan:   { text: 'text-accent',  bg: 'bg-accent',  via: 'via-accent',  border: 'border-accent/40',     glow: 'shadow-[0_0_60px_-15px_rgba(0,217,255,0.5)]'   },
  green:  { text: 'text-green',   bg: 'bg-green',   via: 'via-green',   border: 'border-green/40',      glow: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.5)]'  },
  amber:  { text: 'text-amber',   bg: 'bg-amber',   via: 'via-amber',   border: 'border-amber/40',      glow: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.5)]'  },
  pink:   { text: 'text-pink',    bg: 'bg-pink',    via: 'via-pink',    border: 'border-pink/40',       glow: 'shadow-[0_0_60px_-15px_rgba(236,72,153,0.5)]'  },
  muted:  { text: 'text-text-3',  bg: 'bg-text-3',  via: 'via-text-3',  border: 'border-border-strong', glow: '' },
};
