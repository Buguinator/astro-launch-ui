import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import reactI18next from "astro-react-i18next";

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    reactI18next({
      defaultLocale: "en-US",
      locales: ["en-US", "es-MX"],
    }),
  ],
});
