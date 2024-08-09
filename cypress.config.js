const { defineConfig } = require("cypress");
const path = require('path');
const { startDevServer } = require('@cypress/webpack-dev-server');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://g4ss4n-makerspace.netlify.app/',
    specPattern: [
      "cypress/e2e/active/register.cy.js",
      "cypress/e2e/active/login.cy.js",
      "cypress/e2e/active/dashboard.cy.js",
      "cypress/e2e/active/createNewProject.cy.js",
      "cypress/e2e/active/createNewTemplate.cy.js",
      "cypress/e2e/active/createNewProjectTask.cy.js",
      "cypress/e2e/active/taskResponse.cy.js",
      "cypress/e2e/active/dashboard.cy.js",
      "cypress/e2e/active/multiPatricipants.cy.js",
      "cypress/e2e/active/projectDeletion.cy.js",
    ],
    setupNodeEvents(on, config) {
      on('dev-server:start', (options) => {
        return startDevServer({
          options,
          webpackConfig: require('./webpack.config.js'),
        });
      });
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: require('./webpack.config.js'), 
    },
  },
});
