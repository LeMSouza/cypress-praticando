const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '745fk8',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto',
      reportPageTitle: 'Projeto'
    },
    baseUrl: 'http://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    //viewportWidth: 335,
    //viewportHeight: 999,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
