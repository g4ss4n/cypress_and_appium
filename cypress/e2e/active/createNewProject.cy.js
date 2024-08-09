import LoginPage from '../../support/pages/loginPage';
import DashboardPage from '../../support/pages/dashboardPage';
import ProjectModalPage from '../../support/pages/projectModalPage';

describe('Create New Project Using Empty Template', () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    const projectModalPage = new ProjectModalPage();

    beforeEach(() => {
        cy.visit("/");
    })

    afterEach(() => {
        dashboardPage.logout();
    })
    it('Create New Project As a Teacher', () => {
        cy.fixture('userData').then((data) => {
            const teacher = data.teacher;
            const project = data.project

            loginPage.login(teacher.email, teacher.password);
            dashboardPage.clickCreateNewProject();

            projectModalPage.ensureModalIsVisible();
            projectModalPage.fillProjectName(project.name);
            projectModalPage.clickCreateProject();
            projectModalPage.verifySuccessMessage();
            projectModalPage.clickCloseModal();

            dashboardPage.validateProjectName(project.name);
        });
    });

    it('Create New Project As a Student', () => {
        cy.fixture('userData').then((data) => {
            const student = data.student;
            const project = data.project

            loginPage.login(student.email, student.password);
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
