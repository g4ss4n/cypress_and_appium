// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: [
      'cypress/e2e/active/register.cy.js',
      'cypress/e2e/active/registerError.cy.js',
      'cypress/e2e/active/login.cy.js',
      'cypress/e2e/active/dashboard.cy.js',
      'cypress/e2e/active/createNewProject.cy.js',
      'cypress/e2e/active/createNewTemplate.cy.js',
      'cypress/e2e/active/projectDeletion.cy.js'
    ],
    setupNodeEvents(on, config) {
    }
  }
});
