import RegisterPage from '../../support/pages/registerPage';

describe('User Registration Error Test', () => {
  const registerPage = new RegisterPage();

  it('should display an error when signing up with the same credentials', () => {
    cy.fixture('userData').then((data) => {
      const userData = data.register;

      registerPage.visit(userData.url);

      registerPage.fillFullName(userData.fullName);
      registerPage.fillEmail(userData.email);
      registerPage.fillPassword(userData.password);
      registerPage.fillConfirmPassword(userData.confirmPassword);
      registerPage.selectRole(userData.role);

      registerPage.submit();

      registerPage.verifyErrorMessage();
    });
  });
});
