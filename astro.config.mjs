import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import i18next from "astro-react-i18next";

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    i18next({
      defaultLocale: "es",
      locales: ["es", "en"],
    }),
  ],
  // output: "server",
  base: "/",
});
