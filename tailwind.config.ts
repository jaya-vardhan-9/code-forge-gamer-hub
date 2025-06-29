
import type { Config } from "tailwindcss";

export default {
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
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'gaming-yellow': 'hsl(var(--gaming-yellow))',
				'gaming-blue': 'hsl(var(--gaming-blue))',
				'gaming-green': 'hsl(var(--gaming-green))',
				'gaming-red': 'hsl(var(--gaming-red))',
				'gaming-purple': 'hsl(var(--gaming-purple))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'neon-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--neon-glow)), 0 0 40px hsl(var(--neon-glow))' 
					},
					'50%': { 
						boxShadow: '0 0 10px hsl(var(--neon-glow)), 0 0 20px hsl(var(--neon-glow))' 
					}
				},
				'slide-in-up': {
					'from': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'to': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow-rotate': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 4s ease-in-out infinite',
				'slide-in-up': 'slide-in-up 0.8s ease-out forwards',
				'glow-rotate': 'glow-rotate 20s linear infinite'
			},
			backgroundImage: {
				'gaming-gradient': 'linear-gradient(135deg, hsl(var(--gaming-yellow)), hsl(var(--gaming-blue)), hsl(var(--gaming-green)))',
				'night-gradient': 'radial-gradient(circle at 20% 50%, hsl(var(--gaming-blue))/0.1 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--gaming-yellow))/0.1 0%, transparent 50%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
