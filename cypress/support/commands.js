// cypress/support/commands.js

// Command to visit the login page
Cypress.Commands.add('visitLoginPage', (url) => {
    cy.visit(url);
});

// Command to perform login
Cypress.Commands.add('performLogin', (username, password) => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#submit').click();
});

// Command to verify successful login
Cypress.Commands.add('verifySuccessfulLogin', () => {
    cy.url().should('include', '/logged-in-successfully/');
    cy.get('.post-title').should('contain', 'Logged In Successfully');
});

// Command for page overview
Cypress.Commands.add('pageOverview', () => {
    cy.get('nav').should('contain', 'Home');
    cy.get('nav').should('contain', 'Practice');
    cy.get('nav').should('contain', 'Courses');
    cy.get('nav').should('contain', 'Blog');
    cy.get('nav').should('contain', 'Contact');
});

// Command to perform logout
Cypress.Commands.add('performLogout', () => {
    cy.contains('Log out').click();
    cy.url().should('include', '/practice-test-login/');
    cy.get('h2').should('contain', 'Test login');
});
