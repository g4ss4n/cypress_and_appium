import DashboardPage from "./dashboardPage";

class LoginPage {
  elements = {
    email: () => cy.get('input[placeholder="Email"]'),
    password: () => cy.get('input[placeholder="Password"]'),
    submitButton: () => cy.get('button[type="button"]:contains("Sign In")'),
    signinPageHeading: () => cy.get('.signin-label'), 
    signUp: () => cy.get('a.link').contains('Sign up here'),
    errorMessage: () => cy.get('p').contains('Error signing'),

  };

  goTo(url) {
    cy.visit(url);
  }

  fillEmail(email) {
    this.elements.email().type(email);
  }

  fillPassword(password) {
    this.elements.password().type(password);
  }

  submit() {
    this.elements.submitButton().click();
  }

  verifySuccessfulLogin() {
    cy.url().should('include', '/projects');
  }

  logout() {
    cy.get('nav').contains('Logout').click();
  }

  login(email, password) {
      this.fillEmail(email);
      this.fillPassword(password);
      this.submit();
  }

  validateLoggedOut() {
    this.elements.signinPageHeading().should('be.visible'); 
  }

  signUp() {
    this.elements.signUp().click();
  }

  validateErrorMessage() {
    this.elements.errorMessage().should('be.visible');
  }
}

export default LoginPage;
