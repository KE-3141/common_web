export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  dir: {
  assets: 'assets',
  layouts: 'commons',
  middleware: 'middleware',
  pages: 'design_parts/templates',
  static: 'static',
  store: 'store',
  generate: 'nuxt generate',
},

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'スーリヤ　インド料理店',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/nsy3xjl.css', }
    ],
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
    '~plugins/scroll.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    //SCSSのグローバル変数が使える
    '@nuxtjs/style-resources',
    //アイコン
    'nuxt-fontawesome',
    //SVGをコンポーネントとして使える
    'nuxt-svg-loader',
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
