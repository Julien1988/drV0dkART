import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': {transform: 'rotate(-3deg) scale(1)'},
                    '50%': {transform: 'rotate(3deg) scale(2)'},
                }
            },
            animation: {
                wiggle: 'wiggle 12s ease-in-out infinite',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

        },
    },
    plugins: [],
}
export default config
