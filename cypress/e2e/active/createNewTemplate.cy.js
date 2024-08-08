import LoginPage from '../../support/pages/loginPage';
import DashboardPage from '../../support/pages/dashboardPage';
import TemplateModalPage from '../../support/pages/templateModalPage';

describe('Create New Template Test', () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    const templateModalPage = new TemplateModalPage();

    it('should log in, open the "Create New Template" modal, create a new template, and then close the modal', () => {
        cy.fixture('userData').then((data) => {
            const userData = data.login;
            const template= data.template;

            loginPage.login(userData.email, userData.password, userData.url);

            dashboardPage.clickCreateNewTemplate();
            templateModalPage.ensureModalIsVisible();
            templateModalPage.fillTemplateName(template.name);
            templateModalPage.clickCreateTemplate();

            dashboardPage.validateTemplateName(template.name);

            dashboardPage.logout();
            
        });
    });
});
