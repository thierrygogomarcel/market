import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: [
    '@nhost/vue', // Module Nhost pour Vue
  ],

  runtimeConfig: {
    // Variables privées (accessibles uniquement côté serveur)
    NHOST_ADMIN_SECRET: process.env.NHOST_ADMIN_SECRET,
    NHOST_WEBHOOK_SECRET: process.env.NHOST_WEBHOOK_SECRET,

    // Variables publiques (accessibles côté client)
    public: {
      NHOST_SUBDOMAIN: process.env.NUXT_PUBLIC_NHOST_SUBDOMAIN,
      NHOST_REGION: process.env.NUXT_PUBLIC_NHOST_REGION,
      NHOST_PROJECT_ID: process.env.NUXT_PUBLIC_NHOST_PROJECT_ID,
      NHOST_BACKEND_URL: process.env.NUXT_PUBLIC_NHOST_BACKEND_URL,
    },
  },

  vite: {
    // Configuration Vite (optionnel)
  },

  compatibilityDate: '2025-02-07',
});