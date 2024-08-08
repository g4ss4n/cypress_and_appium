import LoginPage from '../../support/pages/loginPage';
import DashboardPage from '../../support/pages/dashboardPage';
import ProjectModalPage from '../../support/pages/projectModalPage';
import TemplateModalPage from '../../support/pages/templateModalPage';

describe('Dahsboard Test', () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    const projectModalPage = new ProjectModalPage();
    const templateModalPage = new TemplateModalPage();

    beforeEach(() => {
        cy.fixture('userData').then((data) => {
            const userData = data.login;
            loginPage.login(userData.email, userData.password, userData.url);
        });
    });

    afterEach(() => {
        dashboardPage.logout();
        loginPage.validateLoggedOut();
    });

    it('Create New Template', () => {
        cy.fixture('userData').then((data) => {
            const template= data.template;

            dashboardPage.clickCreateNewTemplate();
            templateModalPage.ensureModalIsVisible();
            templateModalPage.fillTemplateName(template.name);
            templateModalPage.clickCreateTemplate();

            dashboardPage.validateTemplateName(template.name);
            
        });
    });

    it('Create New Project', () => {
        cy.fixture('userData').then((data) => {
            const project = data.project;

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
