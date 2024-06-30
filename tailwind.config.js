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
				background: '#FF3131',
				foreground: '#FF66C4',
				primary: '#8C52FF',
				secondary: '#0CC0DF',
				border: '#5271FF',
				text: '#7ED957',
				text2: '#FFBD59'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	}
};

export default config;
