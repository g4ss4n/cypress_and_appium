// cypress/integration/login.spec.js

import LoginPage from '../support/pages/loginPage';

describe('User Login Test', () => {
  const loginPage = new LoginPage();

  it('should navigate to the login page and log in a user', () => {
    cy.fixture('userData').then((data) => {
      const userData = data.login;

      // Visit the login page
      loginPage.visit(userData.url);

      // Fill out the login form
      loginPage.fillEmail(userData.email);
      loginPage.fillPassword(userData.password);

      // Submit the login form
      loginPage.submit();

      // Verify successful login
      loginPage.verifySuccessfulLogin();
    });
  });
});
