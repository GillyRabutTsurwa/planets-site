import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; //NEWNOTE: needed for alias below

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
  // NEWTESTING: aliasing: https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
