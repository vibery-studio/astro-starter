/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// OLED black base
				bg: {
					DEFAULT: '#000000',
					subtle: '#050505',
					elevated: '#0a0a0a',
					card: '#080808',
				},
				// Primary - Electric Emerald
				primary: {
					DEFAULT: '#10B981',
					light: '#34D399',
					dark: '#059669',
					glow: 'rgba(16, 185, 129, 0.4)',
				},
				// Accent - Amber Gold
				accent: {
					DEFAULT: '#F59E0B',
					light: '#FBBF24',
					dark: '#D97706',
					glow: 'rgba(245, 158, 11, 0.4)',
				},
				// Secondary - Violet
				violet: {
					DEFAULT: '#8B5CF6',
					light: '#A78BFA',
					dark: '#7C3AED',
					glow: 'rgba(139, 92, 246, 0.4)',
				},
				// Text colors
				text: {
					DEFAULT: '#FAFAFA',
					secondary: 'rgba(250, 250, 250, 0.7)',
					muted: 'rgba(250, 250, 250, 0.4)',
				},
				// Border colors
				border: {
					DEFAULT: 'rgba(255, 255, 255, 0.08)',
					light: 'rgba(255, 255, 255, 0.04)',
					glow: 'rgba(255, 255, 255, 0.15)',
				},
				// Glass effects
				glass: {
					bg: 'rgba(10, 10, 10, 0.8)',
					'bg-hover': 'rgba(20, 20, 20, 0.8)',
					border: 'rgba(255, 255, 255, 0.1)',
					'border-hover': 'rgba(255, 255, 255, 0.15)',
					light: 'rgba(255, 255, 255, 0.03)',
				},
			},
			fontFamily: {
				display: ['Space Grotesk', '-apple-system', 'sans-serif'],
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
				mono: ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
			},
			fontSize: {
				'hero': ['5.5rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
				'display': ['5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
			},
			animation: {
				'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'fade-in-scale': 'fadeInScale 0.8s ease-out forwards',
				'typewriter': 'typewriterLine 0.5s ease-out forwards',
				'cursor-blink': 'cursorBlink 1s step-end infinite',
				'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
				'confetti-fall': 'confettiFall 3s linear forwards',
			},
			keyframes: {
				pulseGlow: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				fadeInUp: {
					from: { opacity: '0', transform: 'translateY(30px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				fadeInScale: {
					from: { opacity: '0', transform: 'scale(0.95)' },
					to: { opacity: '1', transform: 'scale(1)' },
				},
				typewriterLine: {
					from: { opacity: '0', transform: 'translateX(-10px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				cursorBlink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
				scrollBounce: {
					'0%, 100%': { transform: 'translateY(0)', opacity: '1' },
					'50%': { transform: 'translateY(8px)', opacity: '0.5' },
				},
				confettiFall: {
					'0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
				},
			},
			boxShadow: {
				'glow-primary': '0 0 20px rgba(16, 185, 129, 0.4)',
				'glow-primary-lg': '0 0 30px rgba(16, 185, 129, 0.4)',
				'glow-white': '0 0 20px rgba(255, 255, 255, 0.05)',
			},
			backdropBlur: {
				'glass': '12px',
			},
		},
	},
	plugins: [],
}
