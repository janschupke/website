import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        background: {
          primary: "#f5f5f5",
          secondary: "#ffffff",
          tertiary: "#fafafa",
        },
        text: {
          primary: "#000000",
          secondary: "#333333",
          tertiary: "#666666",
          muted: "#555555",
        },
        border: {
          primary: "#000000",
          secondary: "#333333",
        },
        interactive: {
          hover: "#000000",
          hoverLight: "#333333",
        },
      },
      spacing: {
        section: "3rem",
        card: "1.5rem",
      },
      borderRadius: {
        card: "0.75rem",
        image: "0.5rem",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.05)",
        cardHover: "0 6px 20px rgba(0,0,0,0.12)",
        image: "0 8px 25px rgba(0,0,0,0.15)",
      },
      keyframes: {
        fadeInDown: {
          from: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          from: {
            opacity: "0",
            transform: "translateX(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        modalFadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        modalScaleIn: {
          from: {
            opacity: "0",
            transform: "scale(0.9)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        slideLeft: {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        slideRight: {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease-out",
        fadeInUp: "fadeInUp 1s ease-out",
        fadeInLeft: "fadeInLeft 1s ease-out",
        fadeInRight: "fadeInRight 1s ease-out",
        fadeInLeftDelayed: "fadeInLeft 1s ease-out 0.3s both",
        fadeInRightDelayed: "fadeInRight 1s ease-out 0.6s both",
        fadeInUpDelayed: "fadeInUp 1s ease-out 0.9s both",
        modalFadeIn: "modalFadeIn 0.3s ease-out",
        modalScaleIn: "modalScaleIn 0.3s ease-out",
        slideLeft: "slideLeft 0.2s ease-out",
        slideRight: "slideRight 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
