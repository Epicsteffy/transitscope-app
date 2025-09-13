module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3666f1",
        accent: "#12b3eb",
        surface: "#f6f9fc"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(54,102,241,0.10)"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}