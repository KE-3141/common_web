export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  dir: {
  assets: 'assets',
  layouts: 'commons',
  middleware: 'middleware',
  pages: 'templates',
  static: 'static',
  store: 'store'
},

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'common_web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/css/reset.css'
  ],

  styleResources: {
    scss: [
      'assets/scss/_mixin.scss',
      'assets/scss/_animation.scss'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    //SCSSのグローバル変数が使える
    '@nuxtjs/style-resources',
    //アイコン
    'nuxt-fontawesome',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  fontawesome: {
   imports: [
     {
       set: '@fortawesome/free-solid-svg-icons',
       icons: ['fas']
     }
   ]
 },
}
