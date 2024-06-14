export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '1700',
    },
    extend: {
      fontFamily: {
        'lora': ['Lora'],
        'montserrat': ['Montserrat'],
        'montserrat-regular': ['Montserrat-Regular'],
        'montserrat-bold': ['Montserrat-Bold'],
      },
      colors: {
        'primary': '#881B1C',
        'secondary': '#D9D9D9',
        'putih': '#FEFEFE',
        'dark': '#333333'
      },
    },
  },
  plugins: [],
}