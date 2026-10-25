/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        milk: '#FAF6F1',
        powder: '#EBD9D1',
        caramel: '#C89F7E',
        gold: {
          DEFAULT: '#B08D57',
          dark: '#A28250',
        },
        graphite: '#2E2A27',
        taupe: '#7A6E66',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        body: ['1.0625rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        h1: ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h1-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        section: '4rem',
        'section-lg': '6rem',
      },
      borderRadius: {
        pill: '999px',
      },
    },
  },
  plugins: [],
};
