import articles from './contents/blog/articles'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'javiscript.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blog de tecnologia' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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

