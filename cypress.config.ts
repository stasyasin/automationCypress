import { defineConfig } from 'cypress';
import PluginEvents = Cypress.PluginEvents;
import PluginConfigOptions = Cypress.PluginConfigOptions;

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/reports-assets',
    reportFilename: '[name].json',
    charts: true,
    overwrite: true,
    html: false,
    json: true
  },
  video: true,
  e2e: {
    setupNodeEvents(on: PluginEvents, config: PluginConfigOptions): void {
      // implement node event listeners here
    }
  }
});
