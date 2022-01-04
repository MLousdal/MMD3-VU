export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Forside - Venstres Ungdom',
    htmlAttrs: {
      lang: 'da',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Velkommen til Venstres Ungdom Tror du på frihed, og ambitiøst fællesskab? Venstres Ungdoms holdninger bygger på liberalismen. Ordet liberalisme stammer fra det latinske ord „liber“, som betyder „fri“. Netop frihed er kendetegnende for liberalismen. For liberale er frihed altid det højeste mål.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: 'Forside - Venstres Ungdom' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://exampel.com' },
      { property: 'og:image', content: '/images/kultur.jpg' },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      {
        property: 'og:description',
        content:
          'Velkommen til Venstres Ungdom Tror du på frihed, og ambitiøst fællesskab? Venstres Ungdoms holdninger bygger på liberalismen. Ordet liberalisme stammer fra det latinske ord „liber“, som betyder „fri“. Netop frihed er kendetegnende for liberalismen. For liberale er frihed altid det højeste mål.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss', 'aos/dist/aos.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  image: {
    // Options
  },

  sitemap: {
    hostname: 'https://exampel.com',
    gzip: true,
    routes: [],
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://exampel.com/sitemap.xml',
    CrawlDelay: 10,
  },
}
