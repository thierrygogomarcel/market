// composables/useNhost.ts
import { useNuxtApp } from '#app';
import type { NhostClient } from '@nhost/nhost-js';

export const useNhost = (): NhostClient => {
  const { $nhost } = useNuxtApp();
  if (!$nhost) {
    throw new Error('Nhost client is not initialized');
  }
  return $nhost;
};