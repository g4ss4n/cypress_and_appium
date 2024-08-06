class TemplateModalPage {
    constructor() {
        this.locators = {
            modal: '.template-modal.open',
            modalContent: '.template-modal-content',
            formHeader: '.form-header',
            formInput: '.form-input',
            addTemplateButton: '.add-template-button',
            closeModalButton: '.close-modal-button'
        };
    }

    ensureModalIsVisible() {
        cy.get(this.locators.modal, { timeout: 5000 })
            .should('be.visible');
    }

    fillTemplateName(name) {
        cy.get(this.locators.formInput)
            .clear()
            .type(name);
    }

    clickCreateTemplate() {
        cy.get(this.locators.addTemplateButton)
            .should('be.enabled')
            .click();
    }

    clickCloseModal() {
        cy.get(this.locators.closeModalButton)
            .should('be.visible')
            .click();
    }
}

export default TemplateModalPage;
