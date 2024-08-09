import LoginPage from '../../support/pages/loginPage';
import DashboardPage from '../../support/pages/dashboardPage';

describe('User Login Test', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  beforeEach(() => {
    cy.visit('/');
  })

  afterEach(() => {
    loginPage.validateLoggedOut();
  });

  it('Login teacher', () => {

    cy.fixture('userData').then((data) => {
      const teacher = data.teacher;

      loginPage.login(teacher.email, teacher.password);
      dashboardPage.checkNavbarTitle();
      dashboardPage.checkUserInfo();
      dashboardPage.checkCreateButtons();

      dashboardPage.logout();
    });

  });

  it('Login student', () => {

    cy.fixture('userData').then((data) => {
      const student = data.student;

      loginPage.login(student.email, student.password);
      dashboardPage.checkNavbarTitle();
      dashboardPage.checkUserInfo();
      dashboardPage.checkCreateButtons();

      dashboardPage.logout();
    });

  });

  it('Throw error when log in a student with wrong password', () => {

    cy.fixture('userData').then((data) => {
      const student = data.student;

      loginPage.login(student.email, student.password + "wrong");
      loginPage.validateErrorMessage();

    });

  });
});
