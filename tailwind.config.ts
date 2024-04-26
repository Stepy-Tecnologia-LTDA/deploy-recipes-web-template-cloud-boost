import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "950": "#0C2E40",
          "900": "#1C485D",
          "800": "#1C566E",
          "700": "#186886",
          "600": "#1581A5",
          "500": "#18B5DC",
          "400": "#31BFDF",
          "300": "#72D9EE",
          "200": "#ACEAF5",
          "100": "#D3F5FA",
          "050": "#EDFCFE",
        },
        secodary: {
          "950": "#3E016A",
          "900": "#5B168D",
          "800": "#6E19B0",
          "700": "#8418DC",
          "600": "#9728F5",
          "500": "#AB4BFF",
          "400": "#C27DFF",
          "300": "#D9B0FF",
          "200": "#EAD2FF",
          "100": "#F3E7FF",
          "050": "#FAF4FF",
        },
        neutral: {
          "950": "#09090B",
          "900": "#18181B",
          "800": "#27272A",
          "700": "#3F3F46",
          "600": "#52525B",
          "500": "#71717A",
          "400": "#A1A1AA",
          "300": "#D4D4D8",
          "200": "#E4E4E7",
          "100": "#F4F4F5",
          "050": "#FAFAFA",
        },
        success: {
          "600": "#16A34A",
          "300": "#86EFAC",
          "100": "#DCFCE7",
        },
        danger: {
          "600": "#DC2626",
          "300": "#FCA5A5",
          "100": "#fEE2E2",
        },
        warning: {
          "400": "#FACC15",
          "200": "#FEF08A",
          "050": "#FEFCE8",
        },
      },

      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
