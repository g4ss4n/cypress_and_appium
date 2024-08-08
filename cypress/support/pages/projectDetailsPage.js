class ProjectDetailsPage {
    elements = {
        backButton: () => cy.get('.navbar-icon svg').first(),
        projectName: () => cy.get('.project-name'),
        projectOwner: () => cy.get('.project-owner'),
        participantsHeader: () => cy.get('h3:contains("Participants")'),
        addThreadButton: () => cy.get('.project-details-navbar .navbar-icon svg'),
        addThreadForm: () => cy.get('.thread-form-detailed'),
        threadTitleInput: () => cy.get('.thread-form input[placeholder="Enter the title"]'),
        threadDescriptionTextarea: () => cy.get('.thread-form textarea[placeholder="Enter the description"]'),
        threadFileInput: () => cy.get('.thread-form input[type="file"]'),
        addThreadSubmitButton: () => cy.get('.thread-form button[type="submit"]'),
        threadPostTitle: () => cy.get('.thread-post-container .post-title', { timeout: 10000 }), 
        threadAttachment: () => cy.get('.thread-post-container .attachment'), 
        responseForm: () => cy.get('.response-form'), 
        responseTextarea: () => cy.get('.response-textarea'), 
        responseSubmitButton: () => cy.get('.response-form button[type="submit"]'),
        responsePostContent: () => cy.get('.thread-response-message', { timeout: 10000 }),
        responseForm: () => cy.get('.response-form'),
        responseButton: () => cy.get('.message-icon')
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
        this.elements.threadPostTitle()
            .should('be.visible')
            .and('contain.text', title);
    }

    verifyThreadFileAttachment(fileName) {
        this.elements.threadAttachment()
            .should('be.visible')
            .and('contain.text', fileName);
    }

    verifyResponseForm() {
        this.elements.responseForm().should('be.visible');
    }

    fillResponseContent(content) {
        this.elements.responseTextarea().type(content);
    }

    submitResponse() {
        this.elements.responseSubmitButton().click();
    }


    clickResponseButton() {
        this.elements.responseButton().click();
    }

    clickFirstResponseButton() {
        cy.get('.message-icon').first().click();
    }

    verifyResponseAdded(content) {
        this.elements.responsePostContent()
            .should('be.visible')
            .and('contain.text', content);
    }
}

export default ProjectDetailsPage;
