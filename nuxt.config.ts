import fs from "fs";

function prepareVurtifyOverrideStyle() {
  const override = `
  @forward "vuetify/settings" with (
    // begin button configuration
    $button-border-radius: 8px,
    // end button configuration
    $utilities: false,
  );  
  `;
  if (!fs.existsSync("./assets/style/tfm")) {
    fs.mkdirSync("./assets/style/tfm");
  }
  if (fs.existsSync("./assets/style/tfm/settings.scss")) {
    const old = fs.readFileSync("./assets/style/tfm/settings.scss");
    if (old.toString("utf-8") === override) return;
  }
  fs.writeFileSync("./assets/style/tfm/settings.scss", override);
  console.log("re write vuetify override style");
}

prepareVurtifyOverrideStyle();

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module"],
  css: ["vuetify/styles", "./assets/style/tfm/settings.scss"],
  vuetify: {
    vuetifyOptions: {
      defaults: {
        VBtn: { variant: "flat", color: "red" },
      },
    },
    moduleOptions: {
      styles: { configFile: "./assets/style/tfm/settings.scss" },
    },
  },
});
