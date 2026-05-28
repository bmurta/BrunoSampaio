import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        'bg-elev': '#0F0F17',
        'bg-card': '#12121A',
        border: {
          DEFAULT: '#1F1F26',
          strong: '#27272F',
        },
        text: {
          DEFAULT: '#F4F4F5',
          2: '#A1A1AA',
          3: '#71717A',
        },
        accent: '#00D9FF',
        violet: '#A78BFA',
        green: '#10B981',
        amber: '#F59E0B',
        pink: '#EC4899',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter2: '-0.022em',
      },
      maxWidth: {
        container: '1240px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
