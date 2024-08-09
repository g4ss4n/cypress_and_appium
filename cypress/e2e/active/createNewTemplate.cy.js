import LoginPage from '../../support/pages/loginPage';
import DashboardPage from '../../support/pages/dashboardPage';
import TemplateModalPage from '../../support/pages/templateModalPage';

describe('Create New Project Using Empty Template', () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    const templateModalPage = new TemplateModalPage();

    beforeEach(() => {
        cy.visit("/");
    })

    afterEach(() => {
        dashboardPage.logout();
    })
    it('Create New Template As a Teacher', () => {
        cy.fixture('userData').then((data) => {
            const teacher = data.teacher;
            const template = data.template

            loginPage.login(teacher.email, teacher.password);
            dashboardPage.clickCreateNewTemplate();

            templateModalPage.ensureModalIsVisible();
            templateModalPage.fillTemplateName(template.name);
            templateModalPage.clickCreateTemplate();
            templateModalPage.verifySuccessMessage();
            templateModalPage.clickCloseModal();

            dashboardPage.validateTemplateName(template.name);
        });
    });

    it('Create New Template As a Student', () => {
        cy.fixture('userData').then((data) => {
            const student = data.student;
            const template = data.template

            loginPage.login(student.email, student.password);
            dashboardPage.clickCreateNewTemplate();

            templateModalPage.ensureModalIsVisible();
            templateModalPage.fillTemplateName(template.name);
            templateModalPage.clickCreateTemplate();
            templateModalPage.verifySuccessMessage();
            templateModalPage.clickCloseModal();

            dashboardPage.validateTemplateName(template.name);
        });
    });

});
