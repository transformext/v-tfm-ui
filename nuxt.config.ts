import fs from 'fs'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

function prepareVurtifyOverrideStyle() {
  const defaultSettings = `
    // begin button configuration
    $button-border-radius:  --measure-dimension-corners-radius-750, 
    // end button configuration
    $utilities: false,
  `

  const filePath = './assets/style/tfm/settings.scss'

  if (!fs.existsSync('./assets/style/tfm')) {
    fs.mkdirSync('./assets/style/tfm', { recursive: true })
  }

  let customOverride = ''
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const customOverrideMatch = fileContent.match(
      /\/\/ start override([\s\S]*?)\/\/ end of override/
    )
    if (customOverrideMatch && customOverrideMatch[1]) {
      customOverride = customOverrideMatch[1].trim()
    }
  }

  const override = `
  // Do not edit this file directly, it is auto generated by v-tfm-ui nuxt.config.ts
  // But you can override vuetify settings here by passing the override values under // override here
  // Author: Anirut Kamchai
  @use "measures" as *; 
  @forward "vuetify/settings" with (
    ${defaultSettings}

    // start override
    ${customOverride}
    // end of override
  );  
  `

  fs.writeFileSync(filePath, override)
  console.log('Vuetify override style updated.')
}

prepareVurtifyOverrideStyle()

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
  css: ['vuetify/styles', resolve('./assets/style/tfm/settings.scss')],
  vuetify: {
    vuetifyOptions: {
      defaults: {
        VBtn: { variant: 'flat', color: 'red' },
        VTextField: { variant: 'outlined' },
      },
    },
    moduleOptions: {
      styles: { configFile: './assets/style/tfm/settings.scss' },
    },
  },
})
