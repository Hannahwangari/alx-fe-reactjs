/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true, // ✅ allows @apply on elements like body
  },
};
