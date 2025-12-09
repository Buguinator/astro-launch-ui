import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import reactI18next from "astro-react-i18next";

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    reactI18next({
      defaultLocale: "es",
      locales: ["es", "en"], // "es" primero ya que es el default
      prefixDefaultLocale: false, // Esto hará que el español use /es/
    }),
  ],
});