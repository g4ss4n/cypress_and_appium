// cypress/support/pages/dashboardPage.js

class DashboardPage {
    constructor() {
        this.locators = {
            userInfo: '.user-info',
            navbarTitle: '.navbar-title',
            projectLabel: '.project-label',
            createNewProjectButton: 'button.create-new:contains("Create New Project")',
            createNewTemplateButton: 'button.create-new:contains("Create New Template")',
            noTemplatesFound: '.template-list p',
            noOwnerProjectsFound: '.owner-projects p',
            noParticipantProjectsFound: '.participant-projects p',
            footerContent: '.footer-content',
            logoutButton: '.navbar-actions .action-button' // Locator for the logout button
        };
    }

    visit(url) {
        cy.visit(url);
    }

    checkUserInfo() {
        cy.get(this.locators.userInfo).should('exist');
    }

    checkNavbarTitle() {
        cy.get(this.locators.navbarTitle).should('contain', 'MakerSpace');
    }

    checkProjectLabel() {
        cy.get(this.locators.projectLabel).should('contain', 'You have 0 projects');
    }

    checkCreateButtons() {
        cy.get(this.locators.createNewProjectButton).should('exist');
        cy.get(this.locators.createNewTemplateButton).should('exist');
    }

    checkNoProjects() {
        cy.get(this.locators.noTemplatesFound).should('contain', 'No templates found');
        cy.get(this.locators.noOwnerProjectsFound).should('contain', 'No projects found');
        cy.get(this.locators.noParticipantProjectsFound).should('contain', 'No projects found');
    }

    checkFooterContent() {
        cy.get(this.locators.footerContent).should('exist');
    }

    logout() {
        cy.get(this.locators.logoutButton, { timeout: 5000 }) // Wait up to 5 seconds for the logout button
          .should('exist')
          .click();
          
        // Verify that the user has been logged out
        cy.get(this.locators.logoutButton, { timeout: 5000 })
          .should('not.exist');
    }
}

export default DashboardPage;
