import ProjectDetailsPage from '../../support/pages/projectDetailsPage';
import LoginPage from '../../support/pages/loginPage';
import DashboardPage from '../../support/pages/dashboardPage';


describe('Create New Task Test', () => {
    const projectDetailsPage = new ProjectDetailsPage();
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();

    it('should create a new thread in the project and verify its creation', () => {
        cy.fixture('userData').then((data) => {
            const project = data.project;
            const thread = data.thread;
            
            loginPage.login(data.email, data.password, data.url);
            dashboardPage.projectDetailsPage(project.name);
            

            projectDetailsPage.visit(projectUrl);
            projectDetailsPage.clickAddThreadButton();
            projectDetailsPage.verifyAddThreadForm();
            projectDetailsPage.fillThreadTitle(thread.title);
            projectDetailsPage.fillThreadDescription(thread.description);
            projectDetailsPage.attachThreadFile(thread.filePath); 
            projectDetailsPage.submitThread();
            projectDetailsPage.verifyThreadAdded(thread.title);
        });
    });
});
