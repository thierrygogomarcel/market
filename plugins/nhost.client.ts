// plugins/nhost.client.ts
import { defineNuxtPlugin } from '#app';
import { NhostClient } from '@nhost/nhost-js';

export default defineNuxtPlugin((nuxtApp) => {
  const nhost = new NhostClient({
    subdomain: process.env.NUXT_PUBLIC_NHOST_SUBDOMAIN,
    region: process.env.NUXT_PUBLIC_NHOST_REGION,
  });

  console.log('Nhost client initialized:', nhost); // Ajoutez ce log
  nuxtApp.provide('nhost', nhost);
});