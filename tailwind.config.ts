import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'h': 'rgb(var(--color-base) / <alpha-value>)',
        'p': 'rgb(var(--color-base) / var(--color-text-opacity))',
        "primary": '#3D4D5C', /* Dark blue-gray */
        "primary-dark": '#1F2831', /* Approximately 20% darker than the original primary-dark */
        "secondary": '#8B9B8B', /* Sage green */
        "accent": '#B8C5D0', /* Light blue-gray */
        "backdrop": '#D2C8B5', /* Beige/tan */
        "accent-1": '#CDC5AF', /* Beige/tan */
        'light-bg': 'rgba(205, 197, 175, .2)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        raleway: ['Raleway', 'sans-serif'], // Add this line
      },
      spacing: {
        'side-spacing': '20px', // Default value
        'side-spacing-sm': '20px',
        'side-spacing-md': '40px',
        'side-spacing-lg': '60px',
        'side-spacing-xl': '60px',
        'section-spacing': '60px',
        'section-spacing-lg': '80px',
      },
      fontSize: {
        'xs': '0.8rem',     // 12.8px
        'sm': '1rem',       // 16px
        'base': '1.25rem',  // 20px
        'lg': '1.563rem',   // 25px
        'xl': '1.953rem',   // 31.25px
        '2xl': '2.441rem',  // 39.06px
        '3xl': '3.052rem',  // 48.83px
      }
    },
  },
  plugins: [
    plugin(function({ addBase, addUtilities, theme }) {
      addBase({
        ':root': {
          '--color-base': '61 77 92',
          '--color-text-opacity': '0.85',
        },
      });
      addUtilities({
        '.mx-side-spacing': {
          marginLeft: theme('spacing.side-spacing'),
          marginRight: theme('spacing.side-spacing'),
          '@screen sm': {
            marginLeft: theme('spacing.side-spacing-sm'),
            marginRight: theme('spacing.side-spacing-sm'),
          },
          '@screen md': {
            marginLeft: theme('spacing.side-spacing-md'),
            marginRight: theme('spacing.side-spacing-md'),
          },
          '@screen lg': {
            marginLeft: theme('spacing.side-spacing-lg'),
            marginRight: theme('spacing.side-spacing-lg'),
          },
          '@screen xl': {
            marginLeft: theme('spacing.side-spacing-xl'),
            marginRight: theme('spacing.side-spacing-xl'),
          },
        },
        '.px-side-spacing': {
          paddingLeft: theme('spacing.side-spacing'),
          paddingRight: theme('spacing.side-spacing'),
          '@screen sm': {
            paddingLeft: theme('spacing.side-spacing-sm'),
            paddingRight: theme('spacing.side-spacing-sm'),
          },
          '@screen md': {
            paddingLeft: theme('spacing.side-spacing-md'),
            paddingRight: theme('spacing.side-spacing-md'),
          },
          '@screen lg': {
            paddingLeft: theme('spacing.side-spacing-lg'),
            paddingRight: theme('spacing.side-spacing-lg'),
          },
          '@screen xl': {
            paddingLeft: theme('spacing.side-spacing-xl'),
            paddingRight: theme('spacing.side-spacing-xl'),
          },
        },
        '.py-section-spacing': {
          paddingTop: theme('spacing.section-spacing'),
          paddingBottom: theme('spacing.section-spacing'),
          '@screen lg': {
            paddingTop: theme('spacing.section-spacing-lg'),
            paddingBottom: theme('spacing.section-spacing-lg'),
          },
        },
      });
    }),
  ],
};

export default config;