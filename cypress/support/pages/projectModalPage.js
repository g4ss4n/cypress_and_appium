// cypress/support/pages/projectModalPage.js

class ProjectModalPage {
    constructor() {
        this.locators = {
            modal: '.modal-content',
            formInput: '.form-input',
            templateDropdown: '.template-dropdown',
            createProjectButton: '.add-project-button',
            closeModalButton: '.close-modal-button',
            successMessage: '.success-message'
        };
    }

    ensureModalIsVisible() {
        cy.get(this.locators.modal).should('be.visible');
    }

    fillProjectName(name) {
        cy.get(this.locators.formInput).type(name);
    }

    selectTemplate(templateName) {
        cy.get(this.locators.templateDropdown).select(templateName).should('have.value', templateName);
    }

    clickCreateProject() {
        cy.get(this.locators.createProjectButton).click();
    }

    clickCloseModal() {
        cy.get(this.locators.closeModalButton).click();
    }

    verifySuccessMessage() {
        cy.get(this.locators.successMessage).should('contain', 'Project added successfully!');
    }
}

export default ProjectModalPage;
