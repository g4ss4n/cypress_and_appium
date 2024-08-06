// cypress/support/pages/editProjectModalPage.js

class EditProjectModalPage {
    constructor() {
        this.locators = {
            modal: '.modal-content',
            projectNameInput: '.project-name-container input',
            editProjectButton: '.edit-project-button',
            deleteProjectInput: '.delete-project-input',
            deleteProjectButton: '.delete-project-button',
            closeModalButton: '.close-modal-button'
        };
    }

    ensureModalIsVisible() {
        cy.get(this.locators.modal).should('be.visible');
    }

    enterProjectName(projectName) {
        cy.get(this.locators.projectNameInput).clear().type(projectName);
    }

    clickEditProjectButton() {
        cy.get(this.locators.editProjectButton).click();
    }

    enableDeleteProject() {
        cy.get(this.locators.deleteProjectInput).type('yes');
    }

    clickDeleteProjectButton() {
        cy.get(this.locators.deleteProjectButton).click();
    }

    closeEditModal() {
        cy.get(this.locators.closeModalButton).click();
    }
}

export default EditProjectModalPage;
