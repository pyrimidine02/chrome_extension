import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './styles/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f3c88',
        secondary: '#f0f4ff',
        accent: '#f49c24',
        ink: '#101828',
        slate: '#475467'
      },
      fontFamily: {
        sans: ['Inter', 'Pretendard', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace']
      },
      spacing: {
        18: '4.5rem'
      },
      borderRadius: {
        xl: '1.25rem'
      },
      boxShadow: {
        card: '0 20px 40px -24px rgba(15, 23, 42, 0.45)'
      }
    }
  },
  plugins: []
};

export default config;
