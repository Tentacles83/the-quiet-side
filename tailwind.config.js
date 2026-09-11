/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,js,html,vue}"],
  theme: {
    extend: {
      colors: {
        // neutral をスレート(青みがかったダーク)で上書き
        neutral: {
          950: "#020617",
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
          500: "#64748b",
          400: "#94a3b8",
          300: "#cbd5e1",
          200: "#e2e8f0",
          100: "#f1f5f9",
          50: "#f8fafc",
        },
        // forest をティールで上書き（青緑系）
        forest: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        lake: {
          50: "#eef6fb",
          100: "#d5ecf7",
          200: "#a9d9ef",
          300: "#71bee3",
          400: "#3ea3d5",
          500: "#2188be",
          600: "#196da1",
          700: "#175884",
          800: "#17496c",
          900: "#163d5a",
        },
        stone: {
          900: "#1a1a1a",
        },
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', "serif"],
        sans: ['"Noto Sans JP"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
