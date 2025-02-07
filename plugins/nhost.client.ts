import { defineNuxtPlugin } from 'nuxt/app';
import { NhostClient } from '@nhost/nhost-js';

export default defineNuxtPlugin((nuxtApp) => {
  const nhost = new NhostClient({
    subdomain: process.env.NHOST_SUBDOMAIN,
    region: process.env.NHOST_REGION,
  });

  nuxtApp.provide('nhost', nhost);
});