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
            logoutButton: '.navbar-actions .action-button',
            templateList: '.template-list',
            ownerProjects: '.owner-projects', // Locator for the owner projects list
            projectItemContent: '.project-list-item .project-item-content',
            editProjectButton: '.project-list-item .edit-icon',
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
        cy.get(this.locators.logoutButton, { timeout: 5000 })
            .should('exist')
            .click();

        cy.get(this.locators.logoutButton, { timeout: 5000 })
            .should('not.exist');
    }

    clickCreateNewTemplate() {
        cy.get(this.locators.createNewTemplateButton).click();
    }

    clickCreateNewProject() {
        cy.get(this.locators.createNewProjectButton).click();
    }

    validateProjectName(projectName) {
        cy.get(this.locators.ownerProjects).should('contain', projectName);
    }

    validateTemplateName(templateName) {
        cy.get(this.locators.templateList).should('contain', templateName);
    }

    verifyProjectModalNotExist(modalPage) {
        cy.get(modalPage.locators.modal).should('not.exist');
    }

    verifyTemplateModalNotExist(templateModalPage) {
        cy.get(templateModalPage.locators.modal).should('not.exist');
    }

    openEditProjectModal(projectName) {
        cy.get(this.locators.projectItemContent)
            .contains(projectName)
            .first()
            .parent()
            .find(this.locators.editProjectButton)
            .click();
    }

    verifyProjectDeleted(projectName) {
        cy.get(this.locators.ownerProjects).should('not.contain', projectName);
    }
}

export default DashboardPage;
