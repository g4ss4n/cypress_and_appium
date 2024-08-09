import ProjectDetailsPage from '../../support/pages/projectDetailsPage';
import LoginPage from '../../support/pages/loginPage';
import DashboardPage from '../../support/pages/dashboardPage';


describe('Create New Task Test', () => {
    const projectDetailsPage = new ProjectDetailsPage();
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();

    beforeEach(() => {
        cy.visit("/");
    })

    afterEach(() => {
        projectDetailsPage.clickBackButton();
        dashboardPage.logout();
    })
    it('Teacher should create a new project task and verify its creation', () => {
        cy.fixture('userData').then((data) => {
            const project = data.project;
            const thread = data.thread;
            const teacher = data.teacher;
            
            loginPage.login(teacher.email, teacher.password);
            
            dashboardPage.goToProject(project.name);

            projectDetailsPage.clickAddThreadButton();
            projectDetailsPage.verifyAddThreadForm();
            projectDetailsPage.fillThreadTitle(thread.title);
            projectDetailsPage.fillThreadDescription(thread.description);
            projectDetailsPage.submitThread();
            projectDetailsPage.verifyThreadAdded(thread.title);
        });
    });

    it('Student should create a new project task and verify its creation', () => {
        cy.fixture('userData').then((data) => {
            const project = data.project;
            const thread = data.thread;
            const student = data.student;
            
            loginPage.login(student.email, student.password);
            
            dashboardPage.goToProject(project.name);

            projectDetailsPage.clickAddThreadButton();
            projectDetailsPage.verifyAddThreadForm();
            projectDetailsPage.fillThreadTitle(thread.title);
            projectDetailsPage.fillThreadDescription(thread.description);
            projectDetailsPage.submitThread();
            projectDetailsPage.verifyThreadAdded(thread.title);
        });
    });
});
