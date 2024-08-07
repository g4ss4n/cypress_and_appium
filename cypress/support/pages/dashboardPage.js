class DashboardPage {
    elements = {
        userInfo: () => cy.get('.user-info'),
        navbarTitle: () => cy.get('.navbar-title'),
        projectLabel: () => cy.get('.project-label'),
        createNewProjectButton: () => cy.get('button.create-new:contains("Create New Project")'),
        createNewTemplateButton: () => cy.get('button.create-new:contains("Create New Template")'),
        noTemplatesFound: () => cy.get('.template-list p'),
        noOwnerProjectsFound: () => cy.get('.owner-projects p'),
        noParticipantProjectsFound: () => cy.get('.participant-projects p'),
        footerContent: () => cy.get('.footer-content'),
        logoutButton: () => cy.get('.navbar-actions .action-button'),
        templateList: () => cy.get('.template-list'),
        ownerProjects: () => cy.get('.owner-projects'),
        projectItemContent: () => cy.get('.project-list-item .project-item-content'),
        editProjectButton: () => cy.get('.project-list-item .edit-icon')
    };

    visit(url) {
        cy.visit(url);
    }

    checkUserInfo() {
        this.elements.userInfo().should('exist');
    }

    checkNavbarTitle() {
        this.elements.navbarTitle().should('contain', 'MakerSpace');
    }

    checkProjectLabel() {
        this.elements.projectLabel().should('contain', 'You have 0 projects');
    }

    checkCreateButtons() {
        this.elements.createNewProjectButton().should('exist');
        this.elements.createNewTemplateButton().should('exist');
    }

    checkNoProjects() {
        this.elements.noTemplatesFound().should('contain', 'No templates found');
        this.elements.noOwnerProjectsFound().should('contain', 'No projects found');
        this.elements.noParticipantProjectsFound().should('contain', 'No projects found');
    }

    checkFooterContent() {
        this.elements.footerContent().should('exist');
    }

    logout() {
        this.elements.logoutButton({ timeout: 5000 })
            .should('exist')
            .click();

        this.elements.logoutButton({ timeout: 5000 })
            .should('not.exist');
    }

    clickCreateNewTemplate() {
        this.elements.createNewTemplateButton().click();
    }

    clickCreateNewProject() {
        this.elements.createNewProjectButton().click();
    }

    validateProjectName(projectName) {
        this.elements.ownerProjects().should('contain', projectName);
    }

    validateTemplateName(templateName) {
        this.elements.templateList().should('contain', templateName);
    }

    verifyProjectModalNotExist(modalPage) {
        cy.get(modalPage.elements.modal).should('not.exist');
    }

    verifyTemplateModalNotExist(templateModalPage) {
        cy.get(templateModalPage.elements.modal).should('not.exist');
    }

    openEditProjectModal(projectName) {
        this.elements.projectItemContent()
            .contains(projectName)
            .first()
            .parent()
            .find(this.elements.editProjectButton())
            .click();
    }

    verifyProjectDeleted(projectName) {
        this.elements.ownerProjects().should('not.contain', projectName);
    }
}

export default DashboardPage;
