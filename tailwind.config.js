/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // tema claro-oscuro
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      animation: {
        'principal': 'principal 1.5s forwards',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"], // Esto asegura que las variantes de sombra funcionen en modo oscuro
    },
  },
  plugins: [],
}

