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
          active: "#343434"
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          google: ["GoogleSans", "sans-serif"],
          googleLight: ["GoogleSansLight", "sans-serif"],
          moon: ["Moon", "sans-serif"],
          jost: ["Jost"]
        },
        fontSize: {
            primary: "15px",
            small: "0.65rem",
            medium: "0.78rem",
            heading: "1.3rem",
            sidebarLinks: "0.66rem"
        },
        lineHeight: {
            primary: "1",
            secondary: "1.2",
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
