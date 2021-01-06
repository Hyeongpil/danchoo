require('dotenv').config()
const path = require('path')

module.exports = {
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
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
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/axios',
    '@/plugins/api-accessor',
    '@/plugins/cypress',
    '@/plugins/validator'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  // 미들웨어에 접근인증을 위해 추가
  router: {
    // middleware:
    extendRoutes(routes, resolve) {
      // eslint-disable-next-line no-unused-expressions
      routes.push({
        path: '/ui',
        component: resolve(__dirname, 'pages/index.vue')
        // eslint-disable-next-line no-sequences
      }),
        routes.push({
          path: '/ux',
          component: resolve(__dirname, 'pages/index.vue')
        }),
        routes.push({
          path: '/brand',
          component: resolve(__dirname, 'pages/index.vue')
        }),
        routes.push({
          path: '/graphic',
          component: resolve(__dirname, 'pages/index.vue')
        }),
        routes.push({
          path: '/marketing',
          component: resolve(__dirname, 'pages/index.vue')
        }),
        routes.push({
          path: '/media',
          component: resolve(__dirname, 'pages/index.vue')
        }),
        routes.push({
          path: '/3d',
          component: resolve(__dirname, 'pages/index.vue')
        })
    }
  },
  proxy: {
    // '/albums': {
    //   target: 'https://jsonplaceholder.typicode.com/',
    //   secure: false,
    //   changeOrigin: true
    // }
  },
  dotenv: {
    filename:
      process.env.NODE_ENV === 'production' ? '.env' : '.env.' + process.env.NODE_ENV
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {}
      },
      preset: {
        stage: 1
      }
    }
    // extend(_config, _ctx) {}
  }
}
