export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module"],
  css: ["vuetify/styles", "./assets/style/settings.scss"],
  vuetify: {
    vuetifyOptions: {
      defaults: {
        VBtn: { variant: "flat", color: "red" },
      },
    },
    moduleOptions: {
      treeshaking: true,
      styles: { configFile: "./assets/style/settings.scss" },
      // autoImport: false,
      useVuetifyLabs: true,
    },
  },
});
