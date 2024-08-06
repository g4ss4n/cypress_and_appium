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

            loginPage.visit(userData.url);
            loginPage.fillEmail(userData.email);
            loginPage.fillPassword(userData.password);
            loginPage.submit();

            dashboardPage.clickCreateNewTemplate();
            templateModalPage.ensureModalIsVisible();
            templateModalPage.fillTemplateName('My New Template');
            templateModalPage.clickCreateTemplate();
            templateModalPage.clickCloseModal();

            dashboardPage.verifyProjectModalNotExist(templateModalPage);
            dashboardPage.validateTemplateName('My New Template');
            
        });
    });
});
