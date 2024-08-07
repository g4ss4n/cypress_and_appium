class ProjectDetailsPage {
    elements = {
        backButton: () => cy.get('.navbar-icon'),
        projectName: () => cy.get('.project-name'),
        projectOwner: () => cy.get('.project-owner'),
        participantsHeader: () => cy.get('h3:contains("Participants")'),
        addThreadButton: () => cy.get('.project-details-navbar .navbar-icon svg'),
        addThreadForm: () => cy.get('.thread-form-detailed'),
        threadTitleInput: () => cy.get('.thread-form input[placeholder="Enter the title"]'),
        threadDescriptionTextarea: () => cy.get('.thread-form textarea[placeholder="Enter the description"]'),
        threadFileInput: () => cy.get('.thread-form input[type="file"]'),
        addThreadSubmitButton: () => cy.get('.thread-form button[type="submit"]')
    };

    visit(url) {
        cy.visit(url);
    }

    clickBackButton() {
        this.elements.backButton().click();
    }

    verifyProjectName(name) {
        this.elements.projectName().should('contain.text', name);
    }

    verifyProjectOwner(owner) {
        this.elements.projectOwner().should('contain.text', owner);
    }

    verifyParticipantsHeader() {
        this.elements.participantsHeader().should('be.visible');
    }

    clickAddThreadButton() {
        this.elements.addThreadButton().click();
    }

    verifyAddThreadForm() {
        this.elements.addThreadForm().should('be.visible');
    }

    fillThreadTitle(title) {
        this.elements.threadTitleInput().type(title);
    }

    fillThreadDescription(description) {
        this.elements.threadDescriptionTextarea().type(description);
    }

    attachThreadFile(filePath) {
        this.elements.threadFileInput().attachFile(filePath);
    }

    submitThread() {
        this.elements.addThreadSubmitButton().click();
    }

    verifyThreadAdded(title) {
        cy.get('.thread-title').should('contain.text', title);
    }
}

export default ProjectDetailsPage;
