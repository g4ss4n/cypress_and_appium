import DashboardPage from "./dashboardPage";

class LoginPage {
  elements = {
    email: () => cy.get('input[placeholder="Email"]'),
    password: () => cy.get('input[placeholder="Password"]'),
    submitButton: () => cy.get('button[type="button"]:contains("Sign In")'),
    signinPageHeading: () => cy.get('.signin-label'), 

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

  login(email, password, url) {
      this.goTo(url);
      this.fillEmail(email);
      this.fillPassword(password);
      this.submit();
      this.verifySuccessfulLogin();
  }

  validateLoggedOut() {
    this.elements.signinPageHeading().should('be.visible'); 
  }

}

export default LoginPage;
