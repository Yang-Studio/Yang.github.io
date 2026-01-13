import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: '#f9b4ab',
        sand: '#fdebd3',
        slate: '#264e70',
        sage: '#679186',
        mist: '#bbd4ce',
      },
      borderRadius: { sm: '10px', md: '18px', xl: '24px', '2xl': '28px' },
      boxShadow: {
        soft: '0 12px 40px rgba(38,78,112,.15)',
        glow: '0 0 40px rgba(249,180,171,.25)',
      },
    },
  },
  plugins: [],
}

export default config
