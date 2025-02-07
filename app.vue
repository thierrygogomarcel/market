<template>
  <NuxtLayout>
    <div class="relative min-h-screen">
      <!-- Global background -->
      <div class="page-background"></div>

      <!-- Company presentation on startup -->
      <CompanyPresentation v-if="showPresentation" @close="closePresentation" />

      <!-- Fixed header -->
      <TheHeader class="fixed top-0 left-0 right-0 z-40" />

      <!-- Main content -->
      <div class="content pt-5">
        <NuxtPage />
      </div>

      <!-- Optionnel : Console Nhost en Iframe -->
      <iframe
        v-if="showNhostConsole"
        :src="`${nhostUrl}/console`"
        frameborder="0"
        style="width: 100%; height: 100vh"
      ></iframe>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, provide } from 'vue';
import { useHead, useRuntimeConfig } from 'nuxt/app';
import { NhostClient } from '@nhost/nhost-js';
import { createClient, provideClient } from '@urql/vue';
import { useLogger } from './composables/useApp';

// Logger
const logger: ReturnType<typeof useLogger> = useLogger('App');

// Config & Nhost
const config = useRuntimeConfig();
const nhostUrl = computed(() => `https://${config.public.NHOST_SUBDOMAIN}.nhost.run`);
const nhost = new NhostClient({
  subdomain: config.public.NHOST_SUBDOMAIN as string, // Forcer le typage
  region: config.public.NHOST_REGION as string, // Forcer le typage
});
provide('nhost', nhost);

// GraphQL Client
const client = createClient({
  url: `${nhostUrl.value}/v1/graphql`,
  exchanges: [],
});
provideClient(client);

// Présentation d'accueil
const showPresentation = ref(true);
const showNhostConsole = ref(false);

const hasSeenPresentation = () => localStorage.getItem('hasSeenPresentation');
const closePresentation = () => {
  showPresentation.value = false;
  localStorage.setItem('hasSeenPresentation', 'true');
};

// Au montage
onMounted(() => {
  const seenPresentation = hasSeenPresentation();
  if (typeof seenPresentation === 'string' || typeof seenPresentation === 'boolean') {
    showPresentation.value = !seenPresentation;
  } else {
    // Default behavior if type is unexpected
    showPresentation.value = true;
  }

  logger.log('Nhost URL:', nhostUrl.value);
  logger.log('GraphQL Client:', client);
});

// SEO
useHead({
  title: 'GoGoMarket - La marketplace des produits agricoles',
  meta: [
    {
      name: 'description',
      content: "GogoMarket connecte les producteurs agricoles aux acheteurs pour faciliter la vente de produits agricoles en Afrique de l'Ouest.",
    },
  ],
  link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }],
});
</script>

<style>

@import 'assets/css/style.css';
</style>