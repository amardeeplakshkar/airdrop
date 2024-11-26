/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
  			move2: {
  				'0%': {
  					transform: 'rotate(1deg) translate(2px, 2px)'
  				},
  				'50%': {
  					transform: 'rotate(-1deg) translate(-2px, -2px)'
  				},
  				'100%': {
  					transform: 'rotate(1deg) translate(2px, 2px)'
  				}
  			},
  			move3: {
  				'0%': {
  					transform: 'rotate(1deg) translate(0)'
  				},
  				'50%': {
  					transform: 'rotate(-1deg) translate(30px)'
  				},
  				'100%': {
  					transform: 'rotate(1deg) translate(0)'
  				}
  			},
  			move4: {
  				'0%': {
  					transform: 'translate(0)'
  				},
  				'50%': {
  					transform: 'translate(-30px)'
  				},
  				'100%': {
  					transform: 'translate(0)'
  				}
  			},
  			move5: {
  				'0%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-30px)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			rainbow: {
  				'0%': {
  					'background-position': '0%'
  				},
  				'100%': {
  					'background-position': '200%'
  				}
  			}
  		},
  		animation: {
  			move2: 'move2 5s linear infinite',
  			move3: 'move3 5s linear infinite',
  			move4: 'move4 5s linear infinite',
  			move5: 'move5 5s linear infinite',
  			rainbow: 'rainbow var(--speed, 2s) infinite linear'
  		},
      colors: {
        primary: '#3B82F6',
        secondary: '#1E293B',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',            
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}