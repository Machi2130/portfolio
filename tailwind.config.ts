import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        background: 'hsl(120, 5%, 6%)',
        foreground: 'hsl(120, 100%, 75%)',
        primary: {
          DEFAULT: 'hsl(120, 100%, 50%)',
          foreground: 'hsl(120, 5%, 6%)',
        },
        secondary: {
          DEFAULT: 'hsl(120, 20%, 15%)',
          foreground: 'hsl(120, 50%, 50%)',
        },
        muted: {
          DEFAULT: 'hsl(120, 10%, 12%)',
          foreground: 'hsl(120, 50%, 50%)',
        },
        accent: {
          DEFAULT: 'hsl(120, 100%, 60%)',
        },
        border: 'hsl(120, 30%, 20%)',
        destructive: {
          DEFAULT: 'hsl(0, 84.2%, 60.2%)',
        },
        terminal: {
          glow: 'hsl(120, 100%, 50%)',
          dim: 'hsl(120, 100%, 40%)',
          bright: 'hsl(120, 100%, 85%)',
        },
      },
      borderRadius: {
        lg: '0rem',
        md: '0rem',
        sm: '0rem',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        'page-enter': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scanlines-move': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(8px)' },
        },
        'screen-flicker': {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'page-enter': 'page-enter 0.4s ease-out both',
        'scanlines-move': 'scanlines-move 8s linear infinite',
        'screen-flicker': 'screen-flicker 0.15s ease-in-out infinite',
      },
      boxShadow: {
        'terminal-glow': '0 0 10px rgba(0,255,0,0.8), 0 0 20px rgba(0,255,0,0.4)',
      },
    },
  },
  plugins: [],
}

export default config

