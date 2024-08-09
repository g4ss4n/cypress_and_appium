import RegisterPage from '../../support/pages/registerPage';
import DashboardPage from '../../support/pages/dashboardPage';
import LoginPage from '../../support/pages/loginPage';

describe('User Registration and Dashboard Test', () => {
  const registerPage = new RegisterPage();
  const dashboardPage = new DashboardPage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to the register page, register a new teacher, and verify the dashboard', () => {
    cy.fixture('userData').then((data) => {
      const teacher = data.teacher;
      
      loginPage.signUp();

      registerPage.register(
        teacher.name,
        teacher.email,
        teacher.password,
        teacher.password,
        teacher.role
      );

      dashboardPage.checkUserInfo();
      dashboardPage.checkNavbarTitle();
      dashboardPage.checkProjectLabel();
      dashboardPage.checkCreateButtons();
      dashboardPage.checkNoProjects();
      dashboardPage.checkFooterContent();

      dashboardPage.logout();
    });
  });

  it('should navigate to the register page, register a new student, and verify the dashboard', () => {
    cy.fixture('userData').then((data) => {
      const student = data.student;
      
      loginPage.signUp();

      registerPage.register(
        student.name,
        student.email,
        student.password,
        student.password,
        student.role
      );
  
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

  it('should throw error when registering the same student twice', () => {
    cy.fixture('userData').then((data) => {
      const student = data.student;
      
      loginPage.signUp();

      registerPage.register(
        student.name,
        student.email,
        student.password,
        student.password,
        student.role
      );

      registerPage.verifyErrorMessage();
    });
  });
});
