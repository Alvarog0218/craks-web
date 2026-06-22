/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'surface':                   '#faf6ee',
        'surface-dim':               '#f3ede2',
        'surface-bright':            '#fffdf9',
        'surface-container-lowest':  '#ffffff',
        'surface-container-low':     '#f8f4eb',
        'surface-container':         '#f5f0e4',
        'surface-container-high':    '#f0ebd9',
        'surface-container-highest': '#eae4d0',
        'surface-variant':           '#e6e0cc',
        'surface-tint':              '#428488',
        'on-surface':                '#201b17',
        'on-surface-variant':        '#4d4639',
        'inverse-surface':           '#2c5b5e',
        'inverse-on-surface':        '#fdfbf7',

        'background':                '#faf6ee',
        'on-background':             '#201b17',
        'primary':                   '#428488',
        'primary-container':         '#2c5b5e',
        'primary-fixed':             '#afe9f8',
        'primary-fixed-dim':         '#428488',
        'on-primary':                '#ffffff',
        'on-primary-container':      '#ffffff',
        'on-primary-fixed':          '#001f25',
        'on-primary-fixed-variant':  '#064e5a',
        'inverse-primary':           '#afe9f8',

        'secondary':                 '#f5cd62',
        'secondary-container':       '#d9b552',
        'secondary-fixed':           '#ffddb4',
        'secondary-fixed-dim':       '#f5cd62',
        'on-secondary':              '#1c1c17',
        'on-secondary-container':    '#1c1c17',
        'on-secondary-fixed':        '#1c1c17',
        'on-secondary-fixed-variant':'#1c1c17',

        'tertiary':                  '#2c5b5e',
        'tertiary-container':        '#428488',
        'tertiary-fixed':            '#afe9f8',
        'tertiary-fixed-dim':        '#428488',
        'on-tertiary':               '#ffffff',
        'on-tertiary-container':     '#ffffff',
        'on-tertiary-fixed':         '#001f25',
        'on-tertiary-fixed-variant': '#064e5a',

        'outline':                   '#8c8273',
        'outline-variant':           '#e2dacd',

        'error':                     '#ba1a1a',
        'error-container':           '#ffdad6',
        'on-error':                  '#ffffff',
        'on-error-container':        '#93000a',

        'petrol':                    '#428488',
      },
      borderRadius: {
        DEFAULT: '1rem',
        sm:      '0.5rem',
        lg:      '2rem',
        xl:      '3rem',
        full:    '9999px',
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:     ['Manrope', 'sans-serif'],
        label:    ['Manrope', 'sans-serif'],
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
