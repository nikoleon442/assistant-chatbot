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
				background: '#FFFFFF',
				foreground: '#FFFFFF',
				primary: 'FFFFFF',
				secondary: '#FFFFFF',
				border: '#000000',
				text: '#000000',
				text2: '#000000'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	}
};

export default config;
