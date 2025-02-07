export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  runtimeConfig: {
    // Private keys (server-side only)
    NHOST_ADMIN_SECRET: process.env.NHOST_ADMIN_SECRET,
    NHOST_WEBHOOK_SECRET: process.env.NHOST_WEBHOOK_SECRET,

    // Public keys (exposed to client)
    public: {
      NHOST_SUBDOMAIN: process.env.NHOST_SUBDOMAIN || '',
      NHOST_REGION: process.env.NHOST_REGION || ''
    }
  },

  app: {
    head: {
      title: 'GoGoMarket - La marketplace des produits agricoles',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'GoGoMarket connecte les producteurs agricoles aux acheteurs' }
      ]
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  build: {
    transpile: ['@nhost/nhost-js']
  },

  nitro: {
    preset: 'node-server'
  },

  // Optimisations pour ofetch
  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2025-02-07'
})