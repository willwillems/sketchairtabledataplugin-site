export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Sketch Airtabledata Plugin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A simple Sketch plugin to fill your symbols with Airtable data.' },
      // share image
      { property: 'og:site_name', content: 'Sketch Airtabledata plugin' },
      { property: 'og:title', content: 'Sketch Airtabledata plugin' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://sketchairtabledataplugin.com/img/share.jpg' },
      { property: 'og:description', content: 'A simple Sketch plugin to fill your symbols with Airtable data' },
      { property: 'og:url', content: 'https://sketchairtabledataplugin.com' },
      { property: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#f2be3f' },
    ]
  },

  /*
  ** Customize the progress-bar colorz
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/google-analytics'
  ],

  /*
  ** GA Nuxt module config
  */
  googleAnalytics: {
    id: 'UA-116621358-5',
    dev: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
