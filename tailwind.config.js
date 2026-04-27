/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Superficies (amarillo crema dominante) ──
        'surface':                   '#FFF8DC',  // crema yema suave
        'surface-bright':            '#FFFBE6',
        'surface-dim':               '#F2E8B0',
        'surface-variant':           '#FAEFC4',
        'surface-container-lowest':  '#ffffff',
        'surface-container-low':     '#FFF4C9',
        'surface-container':         '#FFEFB3',
        'surface-container-high':    '#FCE89A',
        'surface-container-highest': '#F7DF7A',
        'surface-tint':              '#E8B923',
        'on-surface':                '#1F2A14',
        'on-surface-variant':        '#3D4A2A',
        'inverse-surface':           '#2A3018',
        'inverse-on-surface':        '#FFF8DC',

        'background':                '#FFF8DC',
        'on-background':             '#1F2A14',

        // ── Primary: AMARILLO YEMA (dominante) ──
        'primary':                   '#E8B923',  // amarillo yema profundo
        'primary-container':         '#FFD84D',
        'primary-fixed':             '#FFE680',
        'primary-fixed-dim':         '#F5C634',
        'on-primary':                '#1F2A14',
        'on-primary-container':      '#5C4500',
        'on-primary-fixed':          '#2A1E00',
        'on-primary-fixed-variant':  '#7A5C00',
        'inverse-primary':           '#FFD84D',

        // ── Secondary: VERDE CAMPO (acento principal) ──
        'secondary':                 '#7CB342',  // verde fresco
        'secondary-container':       '#A5D66B',
        'secondary-fixed':           '#C9E89A',
        'secondary-fixed-dim':       '#5A8F2B',
        'on-secondary':              '#ffffff',
        'on-secondary-container':    '#2E4A18',
        'on-secondary-fixed':        '#0F1F00',
        'on-secondary-fixed-variant':'#3D5A1A',

        // ── Tertiary: TURQUESA del manual de marca ──
        'tertiary':                  '#15c6d2',  // turquesa oficial
        'tertiary-container':        '#7DE0E8',
        'tertiary-fixed':            '#B5EEF3',
        'tertiary-fixed-dim':        '#428488',  // petróleo manual
        'on-tertiary':               '#ffffff',
        'on-tertiary-container':     '#003E45',
        'on-tertiary-fixed':         '#001F23',
        'on-tertiary-fixed-variant': '#005662',

        'outline':                   '#7A8060',
        'outline-variant':           '#C7CDA8',

        'error':                     '#ba1a1a',
        'error-container':           '#ffdad6',
        'on-error':                  '#ffffff',
        'on-error-container':        '#93000a',

        // ── Colores oficiales del manual de marca ──
        'brand-turquoise':           '#15c6d2',
        'brand-petrol':              '#428488',
        'brand-pink':                '#ebbed3',
        'petrol':                    '#428488',  // alineado al manual

        // ── Verdes y amarillos extendidos ──
        'yolk':                      '#F5C634',
        'yolk-deep':                 '#E8B923',
        'yolk-light':                '#FFE680',
        'leaf':                      '#7CB342',
        'leaf-deep':                 '#5A8F2B',
        'leaf-light':                '#C9E89A',
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
