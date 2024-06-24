import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {}
		},
		extend: {
			colors: {
				background: '#e2e8f0',
				foreground: '#d4d4d8',
				primary: 'pink',
				secondary: '#fca5a5',
				border: '#475569',
				text: '#18181b',
				text2: '#52525b'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	}
};

export default config;
