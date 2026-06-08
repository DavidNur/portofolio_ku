// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],

  vite: {
    plugins: [
      tailwindcss(),
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|tiff|webp|svg)$/i,
        webp: {
          quality: 80,
        },
        png: {
          quality: 80,
        },
        jpeg: {
          quality: 80,
        },
      }),
    ],
  },
});
