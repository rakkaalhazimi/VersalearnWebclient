export default defineNuxtConfig({
  runtimeConfig: {
    // Firebase admin
    type: "",
    project_id: "",
    private_key_id: "",
    private_key: "",
    client_email: "",
    client_id: "",
    auth_uri: "",
    token_uri: "",
    auth_provider_x509_cert_url: "",
    client_x509_cert_url: "",
    universe_domain: "",

    public: {
      // General configuration
      runMode: "",

      // Firebase client
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: "",
    }
  },

  build: {
    // Font awesome won't be found unless you add this.
    // https://github.com/FortAwesome/vue-fontawesome/issues/215
    transpile: ['@fortawesome/vue-fontawesome']
  },

  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  imports: {
    // Automatically import these dirs
    dirs: ["stores"]
  },

  css: ["~/assets/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

})
