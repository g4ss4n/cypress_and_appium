import LoginPage from '../../support/pages/loginPage';
import DashboardPage from '../../support/pages/dashboardPage';

describe('User Login Test', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  it('should navigate to the login page and log in a user', () => {
    cy.fixture('userData').then((data) => {
      const userData = data.login;

      loginPage.visit(userData.url);

      cy.url().should('include', '/projects'); 

      cy.get(dashboardPage.locators.logoutButton, { timeout: 5000 })
        .then($logoutButton => {
          if ($logoutButton.length) {
            // User is logged in, perform logout
            dashboardPage.logout();
          }

          // Proceed with login
          loginPage.visit(userData.url);

          loginPage.fillEmail(userData.email);
          loginPage.fillPassword(userData.password);

          loginPage.submit();

          loginPage.verifySuccessfulLogin();
        });
    });
  });
});
