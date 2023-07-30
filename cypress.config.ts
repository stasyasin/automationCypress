import { defineConfig } from 'cypress';
import PluginEvents = Cypress.PluginEvents;
import PluginConfigOptions = Cypress.PluginConfigOptions;

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: '[name].html',
    charts: true,
    overwrite: true,
    html: true,
    json: false
  },
  video: true,
  e2e: {
    setupNodeEvents(on: PluginEvents, config: PluginConfigOptions): void {
      // implement node event listeners here
    }
  }
});
