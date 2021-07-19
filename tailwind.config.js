module.exports = {
  purge: [],
  /*purge: {
    enabled: true,
    content: ["./*.html"],
  },*/
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#333333",
        lightblack: "#787878",
        background: "#fdf6f0",
        link: "#be5fe8",
      },
      fontFamily: {
        sans: ["Poppins", "sans"],
        serif: ["Otomanopee One", "sans-serif"],
        mono: ["Cascadia Code", "monospace", "ui-monospace"],
      },
      screens: {
        "3xl": "1720px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
