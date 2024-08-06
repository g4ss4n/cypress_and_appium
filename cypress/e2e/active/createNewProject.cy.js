import LoginPage from '../../support/pages/loginPage';
import DashboardPage from '../../support/pages/dashboardPage';
import ProjectModalPage from '../../support/pages/projectModalPage';

describe('Create New Project Using Template Test', () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    const projectModalPage = new ProjectModalPage();

    it('should log in, create a new project using an existing template, and verify its appearance in the project list', () => {
        cy.fixture('userData').then((data) => {
            const userData = data.login;

            loginPage.visit(userData.url);
            dashboardPage.logout();
            loginPage.fillEmail(userData.email);
            loginPage.fillPassword(userData.password);
            loginPage.submit();

            dashboardPage.clickCreateNewProject();

            projectModalPage.ensureModalIsVisible();
            projectModalPage.fillProjectName('New Project');
            projectModalPage.clickCreateProject();
            projectModalPage.verifySuccessMessage();
            projectModalPage.clickCloseModal();

            dashboardPage.verifyProjectModalNotExist(projectModalPage);
            dashboardPage.validateProjectName('New Project');
        });
    });
});
