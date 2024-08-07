class ProjectModalPage {
    elements = {
        modal: () => cy.get('.modal-content'),
        formInput: () => cy.get('.form-input'),
        templateDropdown: () => cy.get('.template-dropdown'),
        createProjectButton: () => cy.get('.add-project-button'),
        closeModalButton: () => cy.get('.close-modal-button'),
        successMessage: () => cy.get('.success-message')
    };

    ensureModalIsVisible() {
        this.elements.modal().should('be.visible');
    }

    fillProjectName(name) {
        this.elements.formInput().type(name);
    }

    selectTemplate(templateName) {
        this.elements.templateDropdown().select(templateName).should('have.value', templateName);
    }

    clickCreateProject() {
        this.elements.createProjectButton().click();
    }

    clickCloseModal() {
        this.elements.closeModalButton().click();
    }

    verifySuccessMessage() {
        this.elements.successMessage().should('contain', 'Project added successfully!');
    }
}

export default ProjectModalPage;
