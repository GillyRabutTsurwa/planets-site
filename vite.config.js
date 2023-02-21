import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // NOTE: using sass globally in my project
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/sass/abstracts/_variables.scss";
        @use "./src/assets/sass/abstracts/_mixins.scss";
        @use "./src/assets/sass/base/_reset.scss";
          @use "./src/assets/sass/main.scss";`,
      },
    },
  },
});
