// cypress/integration/projectDeletion.spec.js

import DashboardPage from '../../support/pages/dashboardPage';
import EditProjectModalPage from '../../support/pages/editProjectModalPage';
import LoginPage from '../../support/pages/loginPage';
import data from '../../fixtures/userData.json';

describe('Project Deletion', () => {
    const dashboardPage = new DashboardPage();
    const editProjectModalPage = new EditProjectModalPage();
    const loginPage = new LoginPage();
    const projectName = 'New Project';

    it('should delete an existing project', () => {
        const userData = data.login;

        loginPage.goTo(userData.url);
        loginPage.fillEmail(userData.email);
        loginPage.fillPassword(userData.password);
        loginPage.submit();

        dashboardPage.checkUserInfo();
        dashboardPage.checkNavbarTitle();

        dashboardPage.openEditProjectModal(projectName);

        editProjectModalPage.ensureModalIsVisible();
        editProjectModalPage.enableDeleteProject();
        editProjectModalPage.clickDeleteProjectButton();

        dashboardPage.verifyProjectModalNotExist(editProjectModalPage);
        dashboardPage.verifyProjectDeleted(projectName);
    });
});
