// cypress/integration/register.spec.js

import RegisterPage from '../support/pages/registerPage';

describe('User Registration Test', () => {
  const registerPage = new RegisterPage();

  it('should navigate to the register page and register a new user', () => {
    cy.fixture('userData').then((data) => {
      const userData = data.register;

      // Visit the registration page
      registerPage.visit(userData.url);

      // Fill out the registration form
      registerPage.fillFullName(userData.fullName);
      registerPage.fillEmail(userData.email);
      registerPage.fillPassword(userData.password);
      registerPage.fillConfirmPassword(userData.confirmPassword);
      registerPage.selectRole(userData.role);

      // Submit the registration form
      registerPage.submit();

      // Verify successful registration
      registerPage.verifySuccessfulRegistration();
    });
  });
});
