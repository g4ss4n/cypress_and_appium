import LoginPage from '../../support/pages/loginPage';
import DashboardPage from '../../support/pages/dashboardPage';

describe('User Login Test', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  it('should navigate to the login page and log in a user', () => {
    cy.fixture('userData').then((data) => {
      const userData = data.login;

      loginPage.login(userData.email, userData.password, userData.url);
        
    });
  });
});
