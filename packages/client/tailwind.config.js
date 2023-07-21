/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/client/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // 'packages/client/components/**/*.{js,ts,jsx,tsx,mdx}',
    "../../packages/client/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
