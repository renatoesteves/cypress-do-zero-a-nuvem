const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth: 1280,
  e2e: {
  },
  video: true,
  videosFolder: 'cypress/videos',
  setupNodeEvents(on, config) {
    console.log("Configuração do Cypress:", config); 
  },
  // pageLoadTimeout: 120000, // Increase to 120 seconds (2 minutes)
  // defaultCommandTimeout: 10000, // Optional: Increase default command timeout as well
})
