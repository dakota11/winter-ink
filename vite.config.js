import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

const fullReloadAlways = {
  name: 'full-reload-always',
  handleHotUpdate({ server }) {
    server.ws.send({ type: 'full-reload' });
    return [];
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), fullReloadAlways]
  // plugins: [svelte()]
});
