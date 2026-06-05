/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'surface':                   '#f8f4e6',
        'surface-bright':            '#f8f4e6',
        'surface-dim':               '#d8d4c6',
        'surface-variant':           '#e0dcd0',
        'surface-container-lowest':  '#ffffff',
        'surface-container-low':     '#f2eee0',
        'surface-container':         '#ede9db',
        'surface-container-high':    '#e7e3d5',
        'surface-container-highest': '#e0dcd0',
        'surface-tint':              '#825500',
        'on-surface':                '#1c1c17',
        'on-surface-variant':        '#40484a',
        'inverse-surface':           '#31312b',
        'inverse-on-surface':        '#f4f1e8',

        'background':                '#f8f4e6',
        'on-background':             '#1c1c17',

        'primary':                   '#412800',
        'primary-container':         '#5f3d00',
        'primary-fixed':             '#ffddb4',
        'primary-fixed-dim':         '#ffb953',
        'on-primary':                '#ffffff',
        'on-primary-container':      '#eba22d',
        'on-primary-fixed':          '#291800',
        'on-primary-fixed-variant':  '#633f00',
        'inverse-primary':           '#ffb953',

        'secondary':                 '#2a6673',
        'secondary-container':       '#afe9f8',
        'secondary-fixed':           '#b2ecfa',
        'secondary-fixed-dim':       '#96d0de',
        'on-secondary':              '#ffffff',
        'on-secondary-container':    '#2f6a77',
        'on-secondary-fixed':        '#001f25',
        'on-secondary-fixed-variant':'#064e5a',

        'tertiary':                  '#4d2100',
        'tertiary-container':        '#6f3300',
        'tertiary-fixed':            '#ffdbc8',
        'tertiary-fixed-dim':        '#ffb689',
        'on-tertiary':               '#ffffff',
        'on-tertiary-container':     '#ff9750',
        'on-tertiary-fixed':         '#321300',
        'on-tertiary-fixed-variant': '#743500',

        'outline':                   '#70787b',
        'outline-variant':           '#bfc8ca',

        'error':                     '#ba1a1a',
        'error-container':           '#ffdad6',
        'on-error':                  '#ffffff',
        'on-error-container':        '#93000a',

        'petrol':                    '#004B57',
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
