/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#101010",
          secondary: "#232323",
          footer: "#202020",
          active: "#343434",
          hover: "#00A6FF"
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          google: ["GoogleSans", "sans-serif"],
          moon: ["Moon", "sans-serif"],
          jost: ["Jost"]
        },
        fontSize: {
            primary: "15px",
            small: "0.65rem",
            medium: "0.9rem",
            heading: "1.35rem",
            sidebarLinks: "0.78rem"
        },
        lineHeight: {
            primary: "1",
            secondary: "1.69rem",
        },
        textColor: {
            textPrimary: "#E0E0E0",
            textSecondary: "#A3A3A3",
        }
      },
      screens: {
        xl: {"max": "1700px"},
        lg: {"max": "1280px"},
        md: {"max": "1060px"},
        sm: {"max": "768px"},
        ss: {"max": "620px"},
        xs: {'max': "480px"},  
      },
    },
    plugins: [],
  };
