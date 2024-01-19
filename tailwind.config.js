/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    backgroundImage: (theme) => ({
      'mobile-nav': "url('/src/assets/bg-pattern-about-1-mobile-nav-1.svg')",
      'hero-pattern-1': "url('/src/assets/bg-pattern-home-1.svg')",
      'hero-pattern-2': "url('/src/assets/bg-pattern-home-2.svg')",
      'features-pattern-1': "url('/src/assets/bg-pattern-home-3.svg')",
      'testimonials-pattern':
        "url('/src/assets/bg-pattern-home-4-about-3.svg')",
      'testimonials-pattern-2': "url('/src/assets/bg-pattern-home-5.svg')",
      'cta-pattern': "url('/src/assets/bg-pattern-home-6-about-5.svg')",
      'about-4': "url('/src/assets/bg-pattern-about-4.svg')",
      'about-2-contact-1':
        "url('/src/assets/bg-pattern-about-2-contact-1.svg')",
      'pattern-about-2-contact-1':
        "url('/src/assets/bg-pattern-about-2-contact-1.svg')",
      'pattern-contact-2': "url('/src/assets/bg-pattern-contact-2.svg')",
    }),
    extend: {
      colors: {
        'midnight-green': 'hsla(186, 97%, 17%, 1)',
        'light-coral': 'hsla(0, 87%, 73%, 1)',
        white: 'hsl(0, 0%, 100%)',
        'rapture-blue': 'hsl(194, 42%, 63%)',
        'police-blue': 'hsl(216, 41%, 29%)',
        'deep-jungle-green': 'hsl(186, 100%, 14%)',
        'sacramento-state-green': 'hsla(186, 97%, 10%, 1)',
        'dark-green': 'hsla(186, 100%, 8%, 1)',
      },
      gridTemplateRows: {
        custom: '1fr auto auto',
      },
    },
  },
  plugins: [],
};
