
module.exports = {
  mode: 'universal',
  srcDir: 'client/',
  /*
  ** Headers of the page
  */
  head: {
    title: '무료 템플릿을 만나보세요. 부트스트랩 / 뷰 / 리액트 - My UI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'},
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/bundle.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/bootstrap.css',
    '~/assets/css/fonts/fontawesome/solid.css',
    '~/assets/css/fontawesome.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [

  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS : true,
    extend (config, ctx) {
    }
  }
}
