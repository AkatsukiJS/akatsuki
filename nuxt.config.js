import fs from 'fs'
const posts = fs.readdirSync('./posts')
const postsName = posts.map((name) => name.replace(/(^(.+)\.md$)/g, '$2'))

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Akatsuki JS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'O site do grupo Akatsuki JS'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Fira+Sans|Fira+Sans+' +
          'Extra+Condensed&display=swap'
      }
    ]
  },
  manifest: {
    name: 'Akatsuki JS',
    lang: 'pt-br',
    background_color: '#000000'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/reset.css'],
  styleResources: {
    sass: ['@/assets/css/helpers.sass']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/pwa',
      {
        meta: {
          name: 'Akatsuki JS',
          lang: 'pt-br',
          author: 'akatsukijs',
          description: 'O site do grupo Akatsuki JS',
          theme_color: '#000000'
        }
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: './lib/loader.js'
      })
    }
  },
  generate: {
    routes: postsName.map((name) => `blog/${name}`)
  }
}
