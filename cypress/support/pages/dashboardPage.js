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
        logoutButton: () => cy.get('.navbar .action-button svg').first(),
        templateList: () => cy.get('.template-list'),
        ownerProjects: () => cy.get('.owner-projects'),
        projectItemContent: () => cy.get('.project-list-item .project-item-content'),
        editProjectButton: () => cy.get('.project-list-item .edit-icon'),
        editIcon: () => cy.get('svg.edit-icon') 

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

    checkProjectLabel(projectNumber) {
        this.elements.projectLabel().should('contain', `You have ${projectNumber} projects`);
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
        this.elements.logoutButton().wait(1000).click({ force: true });
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

    openFirstEditProjectModal() {
        this.elements.editIcon().click({ force: true }); 
    }

    openEditProjectModal(projectName) {
        this.elements.projectItemContent()
            .contains(projectName)
            .first()
            .parent()
            .find(this.elements.editProjectButton()
            .click({ multiple: true }));
    }

    goToProject(projectName) {
        this.elements.projectItemContent()
            .contains(projectName)
            .click();
    }

    // Optional: Method to go to the first project directly
    goToFirstProject() {
        this.elements.projectItemContent()
            .first()
            .click();
    }

    verifyProjectDeleted(projectName) {
        this.elements.ownerProjects().should('not.contain', projectName);
    }
}

export default DashboardPage;
