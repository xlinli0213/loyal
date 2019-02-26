const path = require('path')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/sass/index.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~plugins/global-components', '~plugins/svg-sprite-loader'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      // Import scss
      config.module.rules.push({
        test: /\.scss/,
        oneOf: [{ use: ['import-glob-loader2'] }],
        enforce: 'pre'
      })

      // Generating an SVG Sprite Sheet
      const urlLoader = config.module.rules.find(loader =>
        loader.test.test('.svg')
      )
      urlLoader.exclude = [path.resolve(__dirname, './assets/icons')]

      config.module.rules.push({
        test: /\.svg$/,
        include: [path.resolve(__dirname, './assets/icons')],
        use: 'svg-sprite-loader'
      })
    }
  }
}
