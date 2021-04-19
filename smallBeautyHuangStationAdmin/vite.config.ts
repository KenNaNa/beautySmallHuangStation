import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import convue from 'convue';

export default defineConfig({
  plugins: [
    vueJsx(),
    ...convue({}),
  ],
});
