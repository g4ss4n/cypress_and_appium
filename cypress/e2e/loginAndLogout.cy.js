const config = require('../cypress.json');

const url = config.env['login_url'];
const username = config.env['username'];
const password = config.env['password'];

describe('Login And Logout Test', () => {
    it('should successfully login, perform page overview, and logout', () => {
        cy.visitLoginPage(url);
        cy.performLogin(username, password);
        cy.verifySuccessfulLogin();
        cy.pageOverview();
        cy.performLogout();
    });
});
