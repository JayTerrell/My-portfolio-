// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Replace with your production domain before deploying.
  site: 'https://example.com',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
