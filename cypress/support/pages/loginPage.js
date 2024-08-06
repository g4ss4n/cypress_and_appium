// cypress/support/pages/loginPage.js

class LoginPage {
    constructor() {
      this.locators = {
        email: 'input[placeholder="Email"]',
        password: 'input[placeholder="Password"]',
        submitButton: 'button[type="button"]:contains("Sign In")'
      };
    }
  
    visit(url) {
      cy.visit(url);
    }
  
    fillEmail(email) {
      cy.get(this.locators.email).type(email);
    }
  
    fillPassword(password) {
      cy.get(this.locators.password).type(password);
    }
  
    submit() {
      cy.get(this.locators.submitButton).click();
    }
  
    verifySuccessfulLogin() {
      cy.url().should('include', '/projects');
    }
  }
  
  export default LoginPage;
  