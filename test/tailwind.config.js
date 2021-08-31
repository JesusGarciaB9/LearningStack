module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {},
    extend: {
      backgroundImage: (theme) => ({
        bgindex:
          "url('https://ableton-production.imgix.net/about/header.jpg?fit=crop&auto=format&fm=jpg')",
      }),
      colors: {
        mamon: '#ff764d',
        griseparador: '#F3F3F3',
        azulrey: '#0000FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
