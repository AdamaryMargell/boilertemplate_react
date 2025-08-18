import type { Config } from 'tailwindcss';
import PrimeUI from 'tailwindcss-primeui'


const config: Config = {
  important: true,
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/primereact-tailwindcss/**/*.js",
  ],
  theme: {


    extend: {
      spacing: Object.fromEntries(
        Array.from({ length: 100 }, (_, index) => [index, `calc(${index}*(2/14)*1rem)`])
      ),

      borderRadius: {
        sm: "0.285714rem",
        md: "0.4285714rem", //6px
        lg: "0.5714285rem",
      },
      colors: {
        transparent: 'transparent',
        inherit: 'inherit',
        primary: {
          DEFAULT: 'var(--p-primary-color)',
          50: 'var(--p-primary-50)',
          100: 'var(--p-primary-100)',
          200: 'var(--p-primary-200)',
          300: 'var(--p-primary-300)',
          400: 'var(--p-primary-400)',
          500: 'var(--p-primary-500)', //DEFAULT
          600: 'var(--p-primary-600)',
          700: 'var(--p-primary-700)',
          800: 'var(--p-primary-800)',
          900: 'var(--p-primary-900)',
          1000: 'var(--p-primary-1000)'
        },
        secondary: {
          DEFAULT: 'var(--p-secondary-color)',
          50: 'var(--p-secondary-50)',
          100: 'var(--p-secondary-100)',
          200: 'var(--p-secondary-200)',
          300: 'var(--p-secondary-300)',
          400: 'var(--p-secondary-400)',
          500: 'var(--p-secondary-500)', //DEFAULT
          600: 'var(--p-secondary-600)',
          700: 'var(--p-secondary-700)',
          800: 'var(--p-secondary-800)',
          900: 'var(--p-secondary-900)',
          1000: 'var(--p-secondary-1000)'
        },
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
          1000: 'var(--gray-1000)',
        },
        black: '#000000',
        white: '#FFFFFF',
        blue: {
          DEFAULT: '#5EADE2',
          50: '#EBF5FB',
          100: '#EBF5FB',
          200: '#D7EAF8',
          300: '#AFD6F1',
          400: '#86C1E9',
          500: '#5EADE2',
          600: '#3698DB',
          700: '#2B7AAF',
          800: '#205B83',
          900: '#163D58',
          1000: '#0B1E2C'
        },
        green: {
          DEFAULT: '#43C8AF',
          50: '#F5FBF2',
          100: '#EBF8E5',
          200: '#D7F1CB',
          300: '#C4E9B1',
          400: '#B0E297',
          500: '#9CDB7D',
          600: '#81B766',
          700: '#65934F',
          800: '#4A6E38',
          900: '#213816',
          950: '#084B3E',
          1000: '#13260A'
        },
        orange: {
          DEFAULT: '#F87A0C',
          50: '#FEF2E7',
          100: '#FEE4CE',
          200: '#FCCA9E',
          300: '#FBAF6D',
          400: '#F9953D',
          500: '#F87A0C',
          600: '#C6620A',
          700: '#954907',
          800: '#633105',
          900: '#4A2504',
          950: '#925E09',
          1000: '#321802'
        },
        red: {
          DEFAULT: '#F1594E',
          50: '#FEEEED',
          100: '#FCDEDC',
          200: '#F9BDB8',
          300: '#F79B95',
          400: '#F47A71',
          500: '#F1594E',
          600: '#C5483F',
          700: '#993730',
          800: '#6D2520',
          900: '#411411',
          950: '#5D1E18',
          1000: '#2B0C0A'
        },
        sky: {
          DEFAULT: '#6A9CF0',
          50: '#F0F5FD',
          100: '#E1EBFC',
          200: '#C3D7F9',
          300: '#A6C4F6',
          400: '#88B0F3',
          500: '#6A9CF0',
          600: '#5681C9',
          700: '#4266A2',
          800: '#2D4A7C',
          900: '#192F55',
          950: '#04251F',
          1000: '#0F2241'
        },
        purple: {
          DEFAULT: '#15BB9C',
          50: '#43C8AF',
          100: '#43C8AF',
          200: '#43C8AF',
          300: '#43C8AF',
          400: '#70D6C3',
          500: '#43C8AF',
          600: '#43C8AF',
          700: '#43C8AF',
          950: '#04251F'
        },
        amber: {
          DEFAULT: '#E84C3D',
          50: '#43C8AF',
          100: '#43C8AF',
          200: '#43C8AF',
          300: '#43C8AF',
          400: '#70D6C3',
          500: '#43C8AF',
          600: '#43C8AF',
          700: '#43C8AF',
          950: '#04251F'
        },
        yellow: {
          DEFAULT: '#F2C84F',
          50: '#FEF9ED',
          100: '#FCF4DC',
          200: '#FAE9B9',
          300: '#F7DE95',
          400: '#F5D372',
          500: '#F2C84F',
          600: '#C6A440',
          700: '#9A7F30',
          800: '#6F5B21',
          900: '#433611',
          950: '#04251F',
          1000: '#2D240A'
        },
        mint: {
          DEFAULT: '#9DD9B5',
          50: '#F5FBF8',
          100: '#EBF7F0',
          200: '#D8F0E1',
          300: '#C4E8D3',
          400: '#B1E1C4',
          500: '#9DD9B5',
          600: '#82B998',
          700: '#67997B',
          800: '#4C785E',
          900: '#315841',
          1000: '#244833'
        },
        aqua: {
          DEFAULT: '#2DA7C0',
          50: '#E0FAFF',
          100: '#B0E5EF',
          200: '#84D0DF',
          300: '#59BCD0',
          400: '#2DA7C0',
          500: '#2DA7C0',
          600: '#02768D',
          700: '#01586A',
          800: '#013B46',
          900: '#012C34',
          1000: '#011F25'
        },
        sand: {
          DEFAULT: '#C4A36D',
          50: '#F9F6F0',
          100: '#F3EDE2',
          200: '#E7DAC5',
          300: '#DCC8A7',
          400: '#D0B58A',
          500: '#C4A36D',
          600: '#9E8358',
          700: '#786443',
          800: '#53442D',
          900: '#403423',
          1000: '#2D2518'
        },
        magenta: {
          DEFAULT: '#2DA7C0',
          50: '#FDF5FF',
          100: '#FBECFF',
          200: '#F8D9FF',
          300: '#F4C6FE',
          400: '#F1B3FE',
          500: '#EDA0FE',
          600: '#D180E3',
          700: '#B560C7',
          800: '#9841AC',
          900: '#7C2190',
          1000: '#6E1183'
        }
      },
    }
  },
  plugins: [PrimeUI],
}

export default config