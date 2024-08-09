import LoginPage from '../../support/pages/loginPage';
import RegisterPage from '../../support/pages/registerPage';
import DashboardPage from '../../support/pages/dashboardPage';
import ProjectModalPage from '../../support/pages/projectModalPage';
import ProjectDetailsPage from '../../support/pages/projectDetailsPage';

describe('Multi Participant Test', () => {
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();
  const dashboardPage = new DashboardPage();
  const projectModalPage = new ProjectModalPage();

  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(() => {
    dashboardPage.logout();
  });

  it('Login as teacher and add user', () => {
    cy.fixture('userData').then((data) => {
      const teacher = data.teacher;
      const student = data.student;
      const project = data.project;

      loginPage.login(teacher.email, teacher.password);
      dashboardPage.openEditProjectModal(project.name);

    });
  });
})