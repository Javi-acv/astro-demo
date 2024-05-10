import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://javi-acv.github.io/index.astro',
  integrations: [tailwind()],
  output: "hybrid",
});
