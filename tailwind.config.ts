import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#10B981',
        'primary-green-dark': '#059669',
        'primary-green-light': '#A7F3D0',
        'secondary-navy': '#1E293B',
        'navy-dark': '#0F172A',
        'accent-light-green': '#D1FAE5',
        'silver': '#E2E8F0',
        'silver-dark': '#CBD5E1',
        'dark-bg': '#0F1117',
        'card-bg': '#1A202C',
        'text-primary': '#F1F5F9',
        'text-secondary': '#94A3B8',
      },
      backgroundImage: {
        'gradient-radial-green': 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
        'gradient-radial-silver': 'radial-gradient(circle, rgba(226,232,240,0.1) 0%, transparent 70%)',
        'gradient-mesh': 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(30,41,59,0.1) 50%, rgba(226,232,240,0.05) 100%)',
        'glow-green': 'radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0) 70%)',
        'glow-silver': 'radial-gradient(circle, rgba(226,232,240,0.2) 0%, rgba(226,232,240,0) 70%)',
      },
      boxShadow: {
        'glow-green': '0 0 30px rgba(16,185,129,0.3)',
        'glow-green-lg': '0 0 60px rgba(16,185,129,0.4)',
        'glow-silver': '0 0 30px rgba(226,232,240,0.2)',
        'glow-silver-lg': '0 0 60px rgba(226,232,240,0.3)',
        'neon-green': '0 0 10px rgba(16,185,129,0.5), inset 0 0 10px rgba(16,185,129,0.2)',
        'tech-card': '0 4px 20px rgba(16,185,129,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'shimmer': 'shimmer 2s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(16,185,129,0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(16,185,129,0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '52px' }],
        '6xl': ['60px', { lineHeight: '64px' }],
      },
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        {
          values: theme('transitionDelay'),
        }
      );
    }),
  ],
}

export default config
