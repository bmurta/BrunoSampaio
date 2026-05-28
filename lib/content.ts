/**
 * All site copy lives here. Edit prose without touching components.
 * Written as first-person reflective narrative — rewrite anything that
 * doesn't sound like you. The bones (themes, structure) should stay;
 * the voice should be yours.
 */

export const hero = {
  pill: 'Open to leadership roles · Toronto, ON',
  // Headline is two lines for rhythm. Action-verb symmetry (apart / together).
  headline: {
    line1Prefix: "I've been ",
    line1Highlight: 'pulling tech apart',
    line1Suffix: ' since I was seven.',
    line2Prefix: 'For the last ',
    line2HighlightYears: 'ten years',
    line2Mid: ", I've been getting paid to ",
    line2HighlightVerb: 'put it back together',
    line2Suffix: '.',
  },
  // Subhead is segmented so "Salvador, Brazil" becomes a LocationTip hover target.
  subhead: {
    before: "I'm Bruno, an engineering leader in Toronto by way of ",
    place: 'Salvador, Brazil',
    after:
      ". I run quality engineering teams across gaming, fintech, and real estate, and I'm working my way deeper into the management side because that's where the most interesting problems live.",
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
    "Seven-year-old me thought there was nothing more interesting than the inside of a Super Nintendo controller. I'd take them apart and put them back together. Half the time they worked better afterward. By the time I was nine, I'd built my first home PC from scavenged parts and learned the hard way which cables go where. I owe most of my career to that small loop of curiosity: open the thing up, figure out who decided where each piece went, and learn how to be one of those people.",
    "I started getting paid for it a decade ago. The first real job was in a basement office in Salvador, manually testing Brazilian-Portuguese builds of LG mobile phones. Open the menu, tap every button, make sure nothing crashed. Three languages, hundreds of SKUs, the kind of work nobody writes blog posts about. I loved it. There was something honest about being the person who decided whether software was actually ready to ship.",
    "Ten years later I'm leading quality at Honeywell on a North American real-estate platform serving millions of users. What's stayed constant is the same instinct. Quality is the most under-rated lens on a product. You see things from the QA seat that nobody else does: how design decisions collide with engineering tradeoffs, how a feature looks perfect in a sprint review and falls apart on a real phone, on a real network, in a customer's hand. After enough years, that vantage point becomes a kind of compounding advantage.",
    "Here's what I've realised though: I don't want to be a QA Lead forever. The work I'm proudest of has always been the work where I stopped being 'the QA person' and started being the engineer-product-translator, the one who could sit with a PM and a senior dev and turn a vague concern into a roadmap people could actually act on. That's the seat I'm building toward. Engineering management, product engineering leadership, anywhere I get to keep the cross-functional view I built in QA but spend more of the day shaping where the team is going next, not just what it ships this sprint.",
  ],
  tags: ['Engineering Management', 'Quality Strategy', 'Cross-functional leadership', 'Mentorship', 'Toronto · open to remote', 'EN · PT · FR'],
};

export const industries = {
  eyebrowNum: '02',
  eyebrow: 'Where I’ve worked',
  heading: 'Three industries. One operating manual.',
  subhead:
    "I keep gravitating to work where quality has real teeth. Hover the cards on the right to read what each industry taught me.",
  items: [
    {
      id: 'gaming',
      label: 'Gaming',
      accent: 'violet' as const,
      emoji: '🎮',
      tagline: 'where I learned to care about feel',
      story: [
        "Games are the closest you can get to 'users will judge you in five seconds.' At Magic Media I ran an 8-person QA team across Unity and Unreal projects shipping to Sony, Microsoft, Nintendo, Epic, and Steam. At Wildlife Studios before that, I coordinated quality for live mobile games with more than a million MAU.",
        "What gaming taught me is that quality isn't a checklist. It's a feeling. A frame stutter that doesn't show up in any test plan can be the thing that loses a player forever. We started running QA alongside community managers, not after them, because the people answering Discord at 2am knew what was broken before any dashboard did. That changed how I think about what testing is actually for.",
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
      tagline: 'where I learned the consequences',
      story: [
        "At Cubos Tecnologia in Salvador I led a 12-person team that shipped Brazil's first Open Banking application. Design, engineering, QA, all reporting through me. We were inventing the regulatory pattern in real time while the central bank watched over our shoulder.",
        "Fintech is the opposite end of the spectrum from gaming. A bad release isn't a refund. It's someone's salary not landing, a transfer that doesn't clear, trust that doesn't come back. That weight reshapes how you think about risk. You stop optimizing for velocity and start optimizing for the long-term cost of being wrong. The Cypress pipeline I built there eventually let us release weekly instead of monthly. Boring infrastructure, but the kind that earns you the right to move fast later.",
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
      tagline: 'where I learned about scale and physics',
      story: [
        "Today at Honeywell I lead QA for a North American real-estate platform serving millions of users. Software, but with hardware in the loop. IoT devices in actual buildings, thermostats in basements, sensors that can't be patched over the air the way an app can.",
        "Hardware adds physics to the equation. You can't ship-and-fix when the bug is in a device that's been mounted on a wall three years ago. That constraint pushes the quality conversation way upstream, into specification, into procurement, into how you design for a system you may not get to touch again. It's been the most operationally serious environment I've worked in, and the place I've grown the most as a leader.",
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
    "A non-exhaustive tour, in roughly reverse-chronological order. Real-estate platforms, mobile games people actually play, and the fintech work that taught me what 'serious' really means.",
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
        "BrokerBay is the showing management platform real estate brokerages use to coordinate listings, lockbox access, and the messy logistics of getting buyers into homes. I lead QA across mobile and the connected IoT lockbox side, on weekly release cycles. The kind of platform where a regression doesn't just block one transaction, it blocks thousands. Officially renamed Supra One in early 2026, still the same product underneath.",
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
        "Godforge is the cross-platform hero-collector RPG Fateless Games has been building. Community-first, 250+ collectible heroes, $22M raised across two rounds, now in Beta with 100K players. I came in during the early concept and prototype phases as QA Lead, setting up the test strategy from scratch and mentoring the in-house testing team. The kind of engagement where you're shaping how the studio will think about quality before there's a 'game' to test yet.",
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
        "A 3D action-adventure based on Go Nagai's classic Grendizer anime, published by Microids with Magic Media on production. I owned QA across multiple gameplay modes: mech combat, vertical shoot-em-up sections, and the Spazer flying-module flow. Shipped to Steam and consoles. Currently sitting at 84% positive on Steam, which is the kind of number that makes you sleep well after a licensed anime release.",
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
        "Marlim is a Brazilian payments platform that built the first installment credit-card and PIX rails for the currency-exchange market. I worked on the engineering side at Cubos. Clients included Nomad, Foxbit, and Western Union, with total payment volume growing from R$2M to R$60M+ during the work. The kind of fintech project where 'small bug' and 'lost transaction' mean the same thing.",
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
        "Wildlife's social-deduction game. Think Among Us but with built-in voice chat from day one. I coordinated QA during the prototype-to-live transition. The voice chat was the hardest part: testing nine real humans yelling at each other in a stable session on iOS and Android while the round timer ticks down is its own form of QA art.",
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
        "Wildlife's flagship mobile sports game. Real-time multiplayer tennis with quick rallies built to fit between subway stops. 160M+ downloads, 4.6 stars. I coordinated QA across live events, seasonal content, and the matchmaking layer. Real-time multiplayer at this scale is unforgiving, and that's the whole reason it's worth doing.",
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
        "Wildlife's mobile battle royale with zoo animals. A genre mashup (BR meets MOBA) that genuinely worked: 25M+ downloads, 20+ characters with distinct kits. I coordinated QA during peak live-ops and ran regression on new character launches. Same uptime expectations as the rest of the portfolio, with the bonus of fighting through visible bugs in a moving CGI giraffe.",
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
        "Brazil's first Open Banking application. Web in React, native Android in Kotlin, native iOS in Swift, all shipped before the regulatory pattern was even settled. I led a 12-person team across design, engineering, and QA, and stood up the Cypress pipeline that took us from monthly releases to weekly. The central bank was watching over our shoulder while we shipped the spec in real time.",
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
    "I'm open to engineering management, quality leadership, and senior product roles, especially in gaming, fintech, or real-estate tech. Toronto-based, open to remote. The fastest way to get me is email; happy to hop on a call from there.",
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
