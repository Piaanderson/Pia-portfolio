import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'pa-bg': 'var(--pa-bg)',
        'pa-bg2': 'var(--pa-bg2)',
        'pa-bg3': 'var(--pa-bg3)',
        'pa-text': 'var(--pa-text)',
        'pa-text2': 'var(--pa-text2)',
        'pa-body': 'var(--pa-body)',
        'pa-muted': 'var(--pa-muted)',
        'pa-muted2': 'var(--pa-muted2)',
        'pa-muted3': 'var(--pa-muted3)',
        'pa-qtext': 'var(--pa-qtext)',
        'pa-accent': 'var(--pa-accent)',
        'pa-border': 'var(--pa-border)',
        'pa-bstrong': 'var(--pa-bstrong)',
        'pa-chip': 'var(--pa-chip)',
        'pa-navlink': 'var(--pa-navlink)',
        'pa-foot': 'var(--pa-foot)',
        'pa-copy': 'var(--pa-copy)',
        'pa-cta': 'var(--pa-ctaBg)',
        'pa-cta-text': 'var(--pa-ctaText)',
        'pa-glass-bg': 'var(--pa-glassBg)',
        'pa-glass-border': 'var(--pa-glassBorder)',
        'pa-nav-pill': 'var(--pa-navPillBg)',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        pink: 'hsl(var(--pink))',
        orange: 'hsl(var(--orange))',
        'deep-purple': 'hsl(var(--deep-purple))',
        'dark-blue': 'hsl(var(--dark-blue))',
      },
      boxShadow: {
        'pa-glass': 'var(--pa-glassShadow)',
        'pa-soft': '0 22px 48px var(--pa-shadow)',
        'pa-photo': '0 26px 60px var(--pa-shadow)',
      },
      backgroundImage: {
        'pa-ambient': 'var(--pa-amb)',
        'pa-warm-glow': 'var(--pa-warmGlow)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Hanken Grotesk', 'sans-serif'],
        serif: ['var(--font-serif)', 'Newsreader', 'serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
