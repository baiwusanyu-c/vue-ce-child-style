import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteVueCE } from 'unplugin-vue-ce'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      customElement: true,
    }),
    viteVueCE()
  ],
});
