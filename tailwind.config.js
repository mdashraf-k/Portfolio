/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "var(--color-primary, #000000)",
        "on-primary": "var(--color-on-primary, #ffffff)",
        "primary-container": "#1b1b1b",
        "on-primary-container": "#848484",
        "secondary": "var(--color-secondary, #5d5f5f)",
        "on-secondary": "#ffffff",
        "secondary-container": "#dfe0e0",
        "on-secondary-container": "#616363",
        "tertiary": "#000000",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#1b1b1b",
        "on-tertiary-container": "#848484",
        "surface": "var(--color-surface, #fbf8ff)",
        "surface-dim": "#dad9e3",
        "surface-bright": "#fbf8ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f4f2fd",
        "surface-container": "#eeedf7",
        "surface-container-high": "#e8e7f1",
        "surface-container-highest": "#e3e1ec",
        "on-surface": "var(--color-on-surface, #1a1b22)",
        "on-surface-variant": "#4c4546",
        "inverse-surface": "#2f3038",
        "inverse-on-surface": "#f1effa",
        "inverse-primary": "#c6c6c6",
        "outline": "#7e7576",
        "outline-variant": "#cfc4c5",
        "surface-tint": "#5e5e5e",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
      },
      borderRadius: {
        "DEFAULT": "0px",
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
      spacing: {
        "section-gap": "96px",
        "unit": "4px",
        "container-max": "1200px",
        "margin-desktop": "64px",
        "gutter": "24px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "display": ["Geist", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
        "caption": ["Inter", "sans-serif"],
        "headline-md": ["Geist", "sans-serif"],
        "display-lg": ["Geist", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-technical": ["JetBrains Mono", "monospace"],
        "body-lg": ["Inter", "sans-serif"],
        "display-lg-mobile": ["Geist", "sans-serif"]
      },
      fontSize: {
        "caption": ["12px", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
        "headline-md": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" }],
        "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "label-technical": ["13px", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "800" }]
      }
    },
  },
  plugins: [],
}
