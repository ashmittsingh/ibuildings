/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1F86C8',      // Corporate Blue
          secondary: '#BFC5CC',    // Soft Grey/Silver
          accent: '#1A3E6F',       // Darker Navy
          light: '#F5F7FA',        // Light Grey Background
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #1F86C8 0%, #1A3E6F 100%)',
        'brand-gradient-reverse': 'linear-gradient(135deg, #1A3E6F 0%, #1F86C8 100%)',
      },
    },
  },
  plugins: [],
}
