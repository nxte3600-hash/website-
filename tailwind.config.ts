import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#020817",
        navy: {
          950: "#020817",
          900: "#061126",
          850: "#081936",
          800: "#0b2348",
          700: "#0f376a"
        },
        electric: {
          cyan: "#38d7ff",
          blue: "#3d7dff",
          green: "#51f0ac"
        },
        steel: {
          100: "#dcecff",
          300: "#9fb6d8",
          400: "#8ea5c7"
        }
      },
      boxShadow: {
        glow: "0 0 48px rgba(56, 215, 255, 0.24)",
        panel: "0 28px 90px rgba(0, 0, 0, 0.36)"
      },
      backgroundImage: {
        "navy-radial":
          "radial-gradient(circle at 20% 10%, rgba(56,215,255,.18), transparent 34rem), radial-gradient(circle at 80% 0%, rgba(81,240,172,.11), transparent 32rem), linear-gradient(180deg, #020817 0%, #07142c 45%, #020817 100%)",
        "panel-gradient":
          "linear-gradient(180deg, rgba(14,41,86,.78), rgba(4,13,31,.88))"
      },
      keyframes: {
        floatVehicle: {
          "0%,100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" }
        },
        sweep: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        pulseHotspot: {
          "0%,100%": { boxShadow: "0 0 0 8px rgba(56,215,255,.16), 0 0 28px rgba(56,215,255,.7)" },
          "50%": { boxShadow: "0 0 0 14px rgba(81,240,172,.18), 0 0 42px rgba(81,240,172,.8)" }
        },
        scan: {
          "0%": { backgroundPosition: "220% 0" },
          "100%": { backgroundPosition: "-220% 0" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        floatVehicle: "floatVehicle 6.4s ease-in-out infinite",
        sweep: "sweep 5.4s ease-in-out infinite",
        pulseHotspot: "pulseHotspot 2.4s ease-in-out infinite",
        scan: "scan 4.8s linear infinite",
        marquee: "marquee 28s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
