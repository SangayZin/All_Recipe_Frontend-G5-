import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
		  colors: {
			primary: {
			  DEFAULT: '#FF6B6B',  // Primary red color
			  dark: '#E05D5D',     // Darker shade for hover states
			},
			secondary: {
			  DEFAULT: '#4ECDC4',  // Complementary teal
			},
			accent: {
			  DEFAULT: '#FFE66D',  // Accent yellow
			},
			background: {
			  DEFAULT: '#F7FFF7',  // Light background
			  dark: '#292F36',     // Dark background for contrast
			},
		  },
		  fontFamily: {
			sans: ['"Open Sans"', 'sans-serif'],
			serif: ['"Merriweather"', 'serif'],
		  },
		  boxShadow: {
			'nav': '0 2px 10px rgba(0, 0, 0, 0.1)',
			'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
		  },
		  spacing: {
			'nav-height': '4rem',  // Standard navbar height
		  }
		},
	  },
	  plugins: [daisyui],
	  daisyui: {
		logs: false, // Disable DaisyUI logs
		themes: [
		  {
			mytheme: {
			  "primary": "#FF6B6B",
			  "secondary": "#4ECDC4",
			  "accent": "#FFE66D",
			  "neutral": "#292F36",
			  "base-100": "#F7FFF7",
			  "info": "#3ABFF8",
			  "success": "#36D399",
			  "warning": "#FBBD23",
			  "error": "#F87272",
			},
		  },
		],
	  },
	}