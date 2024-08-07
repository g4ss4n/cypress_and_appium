class EditProjectModalPage {
    elements = {
        modal: () => cy.get('.modal-content'),
        projectNameInput: () => cy.get('.project-name-container input'),
        editProjectButton: () => cy.get('.edit-project-button'),
        deleteProjectInput: () => cy.get('.delete-project-input'),
        deleteProjectButton: () => cy.get('.delete-project-button'),
        closeModalButton: () => cy.get('.close-modal-button')
    };

    ensureModalIsVisible() {
        this.elements.modal().should('be.visible');
    }

    enterProjectName(projectName) {
        this.elements.projectNameInput().clear().type(projectName);
    }

    clickEditProjectButton() {
        this.elements.editProjectButton().click();
    }

    enableDeleteProject() {
        this.elements.deleteProjectInput().type('yes');
    }

    clickDeleteProjectButton() {
        this.elements.deleteProjectButton().click();
    }

    closeEditModal() {
        this.elements.closeModalButton().click();
    }
}

export default EditProjectModalPage;
