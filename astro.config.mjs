import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://creatorport.com.hk',
  build: {
    assets: '_assets'
  }
});
