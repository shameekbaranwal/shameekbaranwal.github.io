module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				richblue: {
					DEFAULT: '#0E1F2F',
					900: '#050A0F',
					800: '#0A141F',
					700: '#0F1E2E',
					600: '#14283E',
					500: '#19324D',
					400: '#1E3C5C',
					300: '#23466C',
					200: '#28507B',
					100: '#2D5A8B',
				},
				seashell: '#F7EBE8',
				turq: {
					700: '#00D9C0',
					600: '#1FFFE5',
					500: '#1FFFE5',
					400: '#47FFEA',
					300: '#85FFF1',
					200: '#ADFFF5',
					100: '#D6FFFA',
				},
				imperialRed: '#FF192F',
			},
		},
	},
	variants: {
		extend: {
			display: ['hover', 'focus'],
			ringWidth: ['hover', 'focus'],
			fontSize: ['hover'],
		},
	},
	plugins: [],
};
