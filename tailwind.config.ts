import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      serif: ["var(--font-serif)"],
      sans: ["var(--font-sans)"],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)", // #FF5626
        lime: "rgb(var(--color-tertiary-lime) / <alpha-value>)", // #E0FFA9
      }
    },
  },
  plugins: [],
}
export default config
