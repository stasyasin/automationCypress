import { defineConfig } from 'cypress';
import PluginEvents = Cypress.PluginEvents;
import PluginConfigOptions = Cypress.PluginConfigOptions;

export default defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/reports/my-test-output-[hash].xml'
  },
  e2e: {
    setupNodeEvents(on: PluginEvents, config: PluginConfigOptions): void {
      // implement node event listeners here
    }
  }
});
