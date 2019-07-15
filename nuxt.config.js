import articles from './contents/blog/articles'
import i18nConfig from './i18n.config'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'javiscript.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap' }
    ]
  },

  modules: ['nuxt-i18n'],

  i18n: i18nConfig,

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(webp)$/i')
        config.module.rules.splice(config.module.rules.indexOf(rule), 1)
        
        config.module.rules.push({
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: {
            vue: true
          }
        },{
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
    }
  },
  generate: {
    routes: []
    .concat(articles.map(w => `/article/${w}`))
  }
}

