import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        features: resolve(__dirname, "features.html"),
        pricing: resolve(__dirname, "pricing.html"),
        stories: resolve(__dirname, "stories.html"),
      },
    },
  },
});
