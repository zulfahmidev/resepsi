// ht'@nuxt/image-edge'tps://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-vuefire',
    // 'nuxt-sweetalert2'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
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
      projectId: "my-project-43b9a",
      storageBucket: "my-project-43b9a.appspot.com",
      messagingSenderId: "986173143036",
      appId: "1:986173143036:web:53191afd89f55bb977e479",
      measurementId: "G-CTLZDVDKWC",
    },
    auth: true,
    admin: {
      serviceAccount: {
        clientEmail: "firebase-adminsdk-xaeqy@my-project-43b9a.iam.gserviceaccount.com",
        projectId: "my-project-43b9a",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDpD2VE9AZkwhta\ndPmRM6UNSMmaAUi87uQhgauWaqNlNlSciAJ456kozIWizQuXKUN9POzUuZEZ0+Qu\nbFzKgFPSxbP9prRXD+cfcB5lH7CKxwXei4zc1lEgBJyWtE+2hOdBR+Mu/g/LwsDn\nEQJy7KAJyzN4ghvUgBjqI20LHC9A0j/7XILZn4q08aFE4yzsYfQU6aAqWDRI44V5\neVmmuMnpqPr4Ep67qdaVtoLbsopSjXKtyKlANX3IxlkhPbdMSdWYhJxKIx7FV9Xt\nKOyaT+pHqgyp0iScaWEbgBWsubs7D+8j69oPAHIpGlvFEbWr1LStyoaQarySuUN8\nEkR/2pPfAgMBAAECggEACgljXL8pkKiZ/Eucp80n5tTjTGI7xgR/sesJ/wCj/WrZ\nOqMngBockH47pGbc1etYAF+2+fOX38Xem2/dOyH1pNZmHvP7641AGybSmEZEww/j\nx9FjWpX8M7sfHI+yqHM8G5/t6mB/QPt9H+D9UFeyY1mV44hZjHg2b8w2GPa4w5DK\nqYsA6gM+hIjJPP7cAPNim0UM0D107gV69Oes/2WCD/+uP4OMTsH9US4HikT5seEt\nHhrabVkuqIftzch9kf8cQRlvtf3AE6hj61o44ePNmMu6QXRv923QAz4irsznj+dE\nj4KBBONH76iVnKzGKkN3mWU/gjenMuCWnLqrnsYbyQKBgQD+hFX6YJJo9YWU5/+W\n9kA9wZiYmdao41VsCgygs4UPuSWUwUPmZA+0voH1vZzxItaCYQwru5Vhebl8t1Rw\nbfUrjJePd1ye77Q34dlE3qJcV2Q8fhXwfRtjy9sGNySDiWIUpdBWZqUh5MwhVmG7\nP5+7jGMUk0u7+cFDZW+kQXciBQKBgQDqaw1yGPMz2S9bYwSSgGvy+l2ww3zu8pB1\nrXhXb3uN6OEqe3WiNnACDFt1ehKy9bSM5EbjZE8zdu/8hOom3aoOMjtJCwA9+dF9\n9ToLzQf5N/X1MTSPr6LwqviqwJKs14x+DdbFt0P88c6z3OtnkVaymsgGT1DC/au0\nBL2f1zDPkwKBgGtOgi1o7/Geqm5IjiMouZcP+3VDTxSvnEFLz10lsxEY/3ZDMYx+\nXXzX4VUpV3T3OjeIESiTEv0g5ApoBQrN4VM2GGRdb8h2yaXR69e0ggGqutEiW7+k\nD5s4xKRPNW7bymVoL3luF2s92q6ni9b1kTPykYeIPqMHPutaZgJ7s229AoGBAJw6\nPlrFMAhk/T+9jQWKGudzXk946WFiPU6ADszO2pwoETA72ZkDCMEEtUtk0ON+BxdC\n58+SQYp+ANDdUCQY5MXTSlmSwFWNkcWNUmMdAOxiFESVx37fQgt9Fn7OGrKgcNxt\noq5gRipkiSqr2CNM5Gfh6d7yq1NYtj8iTbIiO0CLAoGBALvx7koTSvoBHjxbChAQ\nGzLT1RpvUyUS7cX+QPF/8Br7Z7LG7CwGZ5anD/BoLUdK98SLQQbO2HLLHUfbCUTr\nhj9a2YIcdR8E6XEDQq5Dh55I+qG86bHGsjy44YxaDdr8FgQLcVHAaQhtZumyNJNQ\nBlHCbASLF3LV0w1mYiWNNW/Z\n-----END PRIVATE KEY-----\n"
      },
    },
  }
})
