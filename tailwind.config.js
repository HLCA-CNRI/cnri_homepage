module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('images/stkImage.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
       })
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}