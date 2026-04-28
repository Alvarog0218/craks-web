/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Superficies (crema yema cálida) ──
        'surface':                   '#FFF6C2',  // crema yema más saturada
        'surface-bright':            '#FFFAE0',
        'surface-dim':               '#F2DC7A',
        'surface-variant':           '#FAE89A',
        'surface-container-lowest':  '#FFFEF5',
        'surface-container-low':     '#FFF1A8',
        'surface-container':         '#FFE988',
        'surface-container-high':    '#FBDD66',
        'surface-container-highest': '#F5CE3D',
        'surface-tint':              '#15c6d2',
        'on-surface':                '#0E2E32',  // petróleo profundo (texto)
        'on-surface-variant':        '#2E5559',
        'inverse-surface':           '#0E2E32',
        'inverse-on-surface':        '#FFF6C2',

        'background':                '#FFF6C2',
        'on-background':             '#0E2E32',

        // ── Primary: TURQUESA del manual (protagonista) ──
        'primary':                   '#15c6d2',  // turquesa oficial CRACKS
        'primary-container':         '#7DE0E8',
        'primary-fixed':             '#B5EEF3',
        'primary-fixed-dim':         '#15c6d2',
        'on-primary':                '#ffffff',
        'on-primary-container':      '#003E45',
        'on-primary-fixed':          '#001F23',
        'on-primary-fixed-variant':  '#005662',
        'inverse-primary':           '#7DE0E8',

        // ── Secondary: PETRÓLEO del manual ──
        'secondary':                 '#428488',  // petróleo oficial
        'secondary-container':       '#6FB0B5',
        'secondary-fixed':           '#A8D4D8',
        'secondary-fixed-dim':       '#2E6E73',
        'on-secondary':              '#ffffff',
        'on-secondary-container':    '#001F23',
        'on-secondary-fixed':        '#001012',
        'on-secondary-fixed-variant':'#1F4F54',

        // ── Tertiary: AMARILLO YEMA fuerte (manual) ──
        'tertiary':                  '#F5C634',  // amarillo yema fuerte
        'tertiary-container':        '#FFD84D',
        'tertiary-fixed':            '#FFE680',
        'tertiary-fixed-dim':        '#E8B923',
        'on-tertiary':               '#2A1E00',
        'on-tertiary-container':     '#5C4500',
        'on-tertiary-fixed':         '#2A1E00',
        'on-tertiary-fixed-variant': '#7A5C00',

        'outline':                   '#5A8488',
        'outline-variant':           '#A8C8CC',

        'error':                     '#ba1a1a',
        'error-container':           '#ffdad6',
        'on-error':                  '#ffffff',
        'on-error-container':        '#93000a',

        // ── Colores oficiales del manual de marca ──
        'brand-turquoise':           '#15c6d2',
        'brand-petrol':              '#428488',
        'brand-pink':                '#ebbed3',
        'petrol':                    '#428488',
        'petrol-deep':               '#1F4F54',
        'turquoise':                 '#15c6d2',
        'turquoise-light':           '#7DE0E8',

        // ── Amarillos yema (refuerzo) ──
        'yolk':                      '#F5C634',
        'yolk-deep':                 '#E8B923',
        'yolk-strong':               '#FFC500',  // amarillo intenso manual
        'yolk-light':                '#FFE680',
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
