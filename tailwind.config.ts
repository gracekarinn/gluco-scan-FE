import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		boxShadow: {
  			'shadow/400': '0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)',
  			'shadow/500': '0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.10)',
  			'shadow/600': '0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)',
  			'shadow/700': '0px 8px 22px -6px rgba(24, 39, 75, 0.12), 0px 14px 64px -4px rgba(24, 39, 75, 0.12)',
  			'shadow/800': '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)',
  			inputHover: '6px 6px 40px 0px rgba(0, 0, 0, 0.10)'
  		},
  		fontSize: {
  			H1: '2rem',
  			H2: '1.75rem',
  			H3: '1.5rem',
  			H4: '1.25rem',
  			H5: '1rem',
  			H6: '0.75rem',
  			M1: '1.75rem',
  			M2: '1.25rem',
  			M3: '1rem',
  			M4: '0.75rem',
  			P1: '1.5rem',
  			P2: '1.25rem',
  			P3: '1.125rem',
  			P4: '1rem',
  			P5: '0.875rem',
  			P6: '0.75rem'
  		},
  		colors: {
  			'red-50': '#FEE6E6',
  			'red-100': '#FBB0B0',
  			'red-200': '#F88A8A',
  			'red-300': '#F55454',
  			'red-400': '#F33333',
  			'red-500': '#F00000',
  			'red-600': '#DA0000',
  			'red-700': '#AA0000',
  			'red-800': '#840000',
  			'red-900': '#650000',
  			'neutral-50': '#EAEAEA',
  			'neutral-100': '#BEBEBE',
  			'neutral-200': '#9F9F9F',
  			'neutral-300': '#737373',
  			'neutral-400': '#585858',
  			'neutral-500': '#2E2E2E',
  			'neutral-600': '#2A2A2A',
  			'neutral-700': '#212121',
  			'neutral-800': '#191919',
  			'neutral-900': '#131313',
  			'white-50': '#FBFBFB',
  			'white-100': '#F4F4F4',
  			'white-200': '#EEEEEE',
  			'white-300': '#E7E7E7',
  			'white-400': '#E2E2E2',
  			'white-500': '#DBDBDB',
  			'white-600': '#C7C7C7',
  			'white-700': '#9B9B9B',
  			'white-800': '#787878',
  			'white-900': '#5C5C5C',
  			'orange-50': '#FFF2E6',
  			'orange-100': '#FFD5B0',
  			'orange-200': '#FFC18A',
  			'orange-300': '#FFA554',
  			'orange-400': '#FF9433',
  			'orange-500': '#FF7900',
  			'orange-600': '#E86E00',
  			'orange-700': '#B55600',
  			'orange-800': '#8C4300',
  			'orange-900': '#6B3300',
  			'yellow-50': '#FEFDE6',
  			'yellow-100': '#FAF8B0',
  			'yellow-200': '#F8F48A',
  			'yellow-300': '#F5F054',
  			'yellow-400': '#F3ED33',
  			'yellow-500': '#F0E800',
  			'yellow-600': '#DAD300',
  			'yellow-700': '#AAA500',
  			'yellow-800': '#848000',
  			'yellow-900': '#656100',
  			'green-Light': '#ECFDF2',
  			'green-Light-hover': '#E3FBEC',
  			'green-Light-active': '#C4F7D8',
  			'green-Normal': '#41E681',
  			'green-Normal-hover': '#3BCF74',
  			'green-Normal-active': '#34B867',
  			'green-Dark': '#31AD61',
  			'green-Dark-hover': '#278A4D',
  			'green-Dark-active': '#1D673A',
  			'green-Darker': '#17512D',
  			'grey-900': '#303030'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
