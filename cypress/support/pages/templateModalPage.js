class TemplateModalPage {
    elements = {
        modal: () => cy.get('.template-modal.open', { timeout: 5000 }),
        modalContent: () => cy.get('.template-modal-content'),
        formHeader: () => cy.get('.form-header'),
        formInput: () => cy.get('.form-input'),
        addTemplateButton: () => cy.get('.add-template-button'),
        closeModalButton: () => cy.get('.close-modal-button')
    };

    ensureModalIsVisible() {
        this.elements.modal().should('be.visible');
    }

    fillTemplateName(name) {
        this.elements.formInput().clear().type(name);
    }

    clickCreateTemplate() {
        this.elements.addTemplateButton().should('be.enabled').click();
    }

    clickCloseModal() {
        this.elements.closeModalButton().should('be.visible').click();
    }
}

export default TemplateModalPage;
