import RegisterPage from '../../support/pages/registerPage';
import DashboardPage from '../../support/pages/dashboardPage';

describe('User Registration and Dashboard Test', () => {
  const registerPage = new RegisterPage();
  const dashboardPage = new DashboardPage();

  it('should navigate to the register page, register a new user, and verify the dashboard', () => {
    cy.fixture('userData').then((data) => {
      const userData = data.register;

      registerPage.visit(userData.url);

      registerPage.fillFullName(userData.fullName);
      registerPage.fillEmail(userData.email);
      registerPage.fillPassword(userData.password);
      registerPage.fillConfirmPassword(userData.confirmPassword);
      registerPage.selectRole(userData.role);

      registerPage.submit();

      cy.url().should('include', '/projects');

      dashboardPage.checkUserInfo();
      dashboardPage.checkNavbarTitle();
      dashboardPage.checkProjectLabel();
      dashboardPage.checkCreateButtons();
      dashboardPage.checkNoProjects();
      dashboardPage.checkFooterContent();

      dashboardPage.logout();
    });
  });
});
