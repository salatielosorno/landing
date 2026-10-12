import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F2E8DF",
        coral: "#F28585",
        gold: "#F2B263",
        sage: "#86A69D",
        blush: "#F2C6C2",
        ink: "#3B2F2F",
      },
      fontFamily: {
        sans: ["var(--font-quicksand)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
