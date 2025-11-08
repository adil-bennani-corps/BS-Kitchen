import type {Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem'
      },
      screens: {
        '2xl': '1200px'
      }
    },
    extend: {
      colors: {
        charcoal: '#1C1C1C',
        'off-white': '#F6F5F3',
        stone: '#8C8C8C',
        brass: '#B08D57',
        sage: '#7C8F7A'
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        display: ['clamp(2.5rem, 1rem + 3vw, 4.25rem)', {lineHeight: '1.05', letterSpacing: '-0.03em'}],
        headline: ['clamp(2rem, 1rem + 2vw, 3.25rem)', {lineHeight: '1.1', letterSpacing: '-0.02em'}],
        eyebrow: ['0.75rem', {lineHeight: '1.2', letterSpacing: '0.28em', textTransform: 'uppercase'}]
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem'
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
        pill: '9999px'
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        outline: '0 0 0 1px rgba(28, 28, 28, 0.06)'
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'}
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'}
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;
