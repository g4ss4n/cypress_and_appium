import ProjectDetailsPage from '../../support/pages/projectDetailsPage';
import LoginPage from '../../support/pages/loginPage';
import DashboardPage from '../../support/pages/dashboardPage';

describe('Add Response to Thread Test', () => {
    const projectDetailsPage = new ProjectDetailsPage();
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();

    beforeEach(() => {
        cy.visit("/");
    });

    it('should add a response to a thread and verify its addition', () => {
        cy.fixture('userData').then((data) => {
            const project = data.project;
            const thread = data.thread;
            const response = data.response; 
            const teacher = data.teacher;
            
            loginPage.login(teacher.email, teacher.password);
            dashboardPage.goToProject(project.name);
            
            cy.contains(thread.title).click(); 

            projectDetailsPage.clickFirstResponseButton();
            projectDetailsPage.verifyResponseForm();
            projectDetailsPage.fillResponseContent(response.content);
            projectDetailsPage.submitResponse();
            projectDetailsPage.verifyResponseAdded(response.content);

            projectDetailsPage.clickBackButton();

        });
    });
});
