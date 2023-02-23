/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
	theme: {
		extend: {
      fontFamily: {
        rubik: ["'Rubik'", 'Verdana', 'sans-serif']
      }
    }
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
}
