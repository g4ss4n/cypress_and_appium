// cypress/integration/projectDeletion.spec.js

import DashboardPage from '../../support/pages/dashboardPage';
import EditProjectModalPage from '../../support/pages/editProjectModalPage';
import LoginPage from '../../support/pages/loginPage';


describe('Project Deletion', () => {
    const dashboardPage = new DashboardPage();
    const editProjectModalPage = new EditProjectModalPage();
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit("/");
      });
    
      afterEach(() => {
        dashboardPage.logout();
      });

    it('should delete all existing projects', () => {
        cy.fixture('userData').then((data) => {
            const teacher = data.teacher;
            const project = data.project;
            
            loginPage.login(teacher.email, teacher.password);
            dashboardPage.openEditProjectModal(project.name);
            editProjectModalPage.enableDeleteProject();
            editProjectModalPage.deleteProject();
        })
    });
});
