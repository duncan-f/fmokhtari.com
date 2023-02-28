/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
	theme: {
    safelist: [
      'animate-[fade-in_1s_ease-in-out]',
      'animate-[fade-in-up_1s_ease-in-out]',
      'animate-[slide-out-left_1s_ease-in-out]'
    ],
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
