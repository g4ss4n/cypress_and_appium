class LoginPage {
  elements = {
    email: () => cy.get('input[placeholder="Email"]'),
    password: () => cy.get('input[placeholder="Password"]'),
    submitButton: () => cy.get('button[type="button"]:contains("Sign In")')
  };

  visit(url) {
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
      this.visit(url);
      this.fillEmail(email);
      this.fillPassword(password);
      this.submit();
      this.verifySuccessfulLogin();
  }
}

export default LoginPage;
