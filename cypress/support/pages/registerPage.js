class RegisterPage {
  elements = {
    fullName: () => cy.get('input[placeholder="Full Name"]'),
    email: () => cy.get('input[placeholder="Email"]'),
    password: () => cy.get('input[placeholder="Password"]'),
    confirmPassword: () => cy.get('input[placeholder="Confirm Password"]'),
    role: (role) => cy.get(`input[name="role"][value="${role}"]`),
    submitButton: () => cy.get('button[type="button"]:contains("Sign Up")'),
    errorMessage: () => cy.get('p:contains("Error signing up: Firebase: Error (auth/email-already-in-use).")')
  };

  visit(url) {
    cy.visit(url);
  }

  fillFullName(fullName) {
    this.elements.fullName().type(fullName);
  }

  fillEmail(email) {
    this.elements.email().type(email);
  }

  fillPassword(password) {
    this.elements.password().type(password);
  }

  fillConfirmPassword(confirmPassword) {
    this.elements.confirmPassword().type(confirmPassword);
  }

  selectRole(role) {
    this.elements.role(role).click();
  }

  submit() {
    this.elements.submitButton().click();
  }

  verifyErrorMessage() {
    this.elements.errorMessage().should('exist');
  }
}

export default RegisterPage;
