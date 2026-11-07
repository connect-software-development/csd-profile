import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0B0B',
        charcoal: '#1A1A1A',
        'dark-gray': '#333333',
        'medium-gray': '#707070',
        'border-gray': '#E5E5E5',
        'light-bg': '#F8F9FA',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        DEFAULT: '4px',
        subtle: '4px',
        card: '6px',
      },
      transitionTimingFunction: {
        precision: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
