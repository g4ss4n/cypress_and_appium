import RegisterPage from '../../support/pages/registerPage';

describe('User Registration Error Test', () => {
  const registerPage = new RegisterPage();

  it('should display an error when signing up with the same credentials', () => {
    cy.fixture('userData').then((data) => {
      const userData = data.register;

      // Visit the registration page
      registerPage.visit(userData.url);

      // Fill out the registration form with the same credentials
      registerPage.fillFullName(userData.fullName);
      registerPage.fillEmail(userData.email);
      registerPage.fillPassword(userData.password);
      registerPage.fillConfirmPassword(userData.confirmPassword);
      registerPage.selectRole(userData.role);

      // Submit the registration form
      registerPage.submit();

      // Verify error message
      registerPage.verifyErrorMessage();
    });
  });
});
