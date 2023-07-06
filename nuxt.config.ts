// ht'@nuxt/image-edge'tps://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-vuefire',
    // 'nuxt-sweetalert2'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vuefire: {
    config: {
      apiKey: "AIzaSyCOaXugL9WnyjMkDyKj486wOfVl2PlRWug",
      authDomain: "my-project-43b9a.firebaseapp.com",
      // databaseURL: "https://my-project-43b9a-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "my-project-43b9a",
      storageBucket: "my-project-43b9a.appspot.com",
      messagingSenderId: "986173143036",
      appId: "1:986173143036:web:53191afd89f55bb977e479",
      measurementId: "G-CTLZDVDKWC",
    },
    auth: true,
    appCheck: {
      debug: process.env.NODE_ENV !== 'production',
      isTokenAutoRefreshEnabled: true,
      provider: 'ReCaptchaV3',
      key: '6LdpKvcmAAAAALq9ljJT2oDl-VeBbjzdrlsI8fYq',
    },
  }
})
