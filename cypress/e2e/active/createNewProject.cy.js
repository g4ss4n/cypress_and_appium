import LoginPage from '../../support/pages/loginPage';
import DashboardPage from '../../support/pages/dashboardPage';
import ProjectModalPage from '../../support/pages/projectModalPage';

describe('Create New Project Using Empty Template', () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    const projectModalPage = new ProjectModalPage();

    it('Create New Project', () => {
        cy.fixture('userData').then((data) => {
            const userData = data.login;
            const project = data.project

            loginPage.login(userData.email, userData.password, userData.url);
            dashboardPage.clickCreateNewProject();

            projectModalPage.ensureModalIsVisible();
            projectModalPage.fillProjectName(project.name);
            projectModalPage.clickCreateProject();
            projectModalPage.verifySuccessMessage();
            projectModalPage.clickCloseModal();

            dashboardPage.validateProjectName(project.name);
        });
    });
});
