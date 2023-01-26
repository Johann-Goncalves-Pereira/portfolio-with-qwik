/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      lineHeight: {
        "lh-1": "calc(1ex + 0.125rem)",
        "lh-2": "calc(1ex + 0.25rem)",
        "lh-3": "calc(1ex + 0.5rem)",
        "lh-4": "calc(1ex + 0.75rem)",
        "lh-5": "calc(1ex + 0.875rem)",
        "lh-6": "calc(1ex + 1rem)",
        "lh-7": "calc(1ex + 1.25rem)",
        "lh-8": "calc(1ex + 1.5rem)",
        "lh-9": "calc(1ex + 1.75rem)",
      },
    },
  },
  plugins: [],
};
