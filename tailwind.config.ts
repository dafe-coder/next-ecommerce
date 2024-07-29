import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			white: colors.white,
			primary: {
				500: '#cc9966',
			},
			dark: {
				200: '#efefef',
				500: '#777777',
				525: '#666666',
				900: '#333333',
			},
			red: {
				400: '#EF837B',
			},
			gray: {
				125: '#fafafa',
				150: '#d7d7d7',
				200: '#ebebeb',
				225: '#cccccc',
				250: '#b5b5b5',
			},
			'shadow-of-gray': '#777777',
			'header-img-border': '#f4f4f4',
			'nav-color': '#222',
		},
		extend: {
			spacing: {
				7.5: '1.875rem', // 30px
			},
			container: {
				padding: '10px',
				center: true,
				screens: {
					xl: '1200px',
				},
			},
			screens: {
				xs: '480px',
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
			},
			fontFamily: {
				poppins: "'Poppins', sans-serif",
			},
			fontSize: {
				xxs: '0.625rem', // 10px
				s: '0.8125rem', // 13px
				sm: '0.875rem', // 14px
				heading: '5rem',
				'heading-one': '4rem',
				'heading-two': '3.6rem',
				'heading-three': '2.6rem',
				'heading-four': '2.2rem',
				'heading-five': '2rem',
				'heading-six': '1.6rem',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				primary: '0 1px 0 0 #cc9966',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
			},
		},
	},
	fontFamily: {
		sans: ['Poppins', ...defaultTheme.fontFamily.sans],
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		require('tailwind-hamburgers'),
		plugin(function ({
			addComponents,
			theme,
			addBase,
		}: {
			addComponents: (components: Record<string, any>) => void
			theme: any
			addBase: any
		}) {
			addComponents({
				'.btn': {
					cursor: 'pointer',
					height: '2.875rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '0.875rem', // 14px
					fontWeight: 500,
					padding: '0.6875rem 0.9375rem', // 11px 15px
					color: theme('colors.white'),
					gap: '0.5rem',
					position: 'relative',
					textTransform: 'uppercase',
					transition: 'all ease .3s',
					'@media not all and (min-width: 640px)': {
						fontSize: '12px',
						padding: '6.5px 10px',
					},
				},
				'.btn-outline': {
					backgroundColor: 'transparent',
					color: theme('colors.primary[500]'),
					transition: 'all ease .2s',
					border: `1px solid ${theme('colors.primary[500]')}`,
					'&:hover': {
						backgroundColor: theme('colors.primary[500]'),
						color: theme('colors.white'),
					},
				},
				'.btn-outline-gray': {
					backgroundColor: 'transparent',
					color: theme('colors.dark[900]'),
					transition: 'all ease .2s',
					border: `1px solid ${theme('colors.gray[150]')}`,
					'&:hover': {
						backgroundColor: theme('colors.gray[125]'),
						color: theme('colors.primary[500]'),
					},
				},
				'.tham-w-6 .tham-inner::before': {
					top: '-5px',
				},
				'.tham-w-6 .tham-inner::after': {
					bottom: '-5px',
				},
				'.swiper-pagination-bullet': {
					background: 'transparent !important',
					border: `1px solid ${theme('colors.dark[500]')}`,
					transition: 'all ease .3s',
					'&-active': {
						width: '18px !important',
						background: `${theme('colors.dark[500]')} !important`,
						borderRadius: '4px !important',
					},
				},
				'.swiper-pagination': {
					display: 'none !important',
					'@media not all and (min-width: 1400px)': {
						display: 'block !important',
					},
				},
			}),
				addBase({
					h1: {
						fontSize: '3rem', // 80px
						fontWeight: 300,
						lineHeight: '125%',
						letterSpacing: '-.025em',
						color: theme('colors.dark.900'),
						'@media not all and (min-width: 640px)': {
							fontSize: '2.25rem',
							lineHeight: '2.6437rem',
						},
					},
				})
		}),
	],
}
export default config
