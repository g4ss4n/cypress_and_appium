class RegisterPage {
  constructor() {
    this.locators = {
      fullName: 'input[placeholder="Full Name"]',
      email: 'input[placeholder="Email"]',
      password: 'input[placeholder="Password"]',
      confirmPassword: 'input[placeholder="Confirm Password"]',
      role: (role) => `input[name="role"][value="${role}"]`,
      submitButton: 'button[type="button"]:contains("Sign Up")',
      errorMessage: 'p:contains("Error signing up: Firebase: Error (auth/email-already-in-use).")'
    };
  }

  visit(url) {
    cy.visit(url);
  }

  fillFullName(fullName) {
    cy.get(this.locators.fullName).type(fullName);
  }

  fillEmail(email) {
    cy.get(this.locators.email).type(email);
  }

  fillPassword(password) {
    cy.get(this.locators.password).type(password);
  }

  fillConfirmPassword(confirmPassword) {
    cy.get(this.locators.confirmPassword).type(confirmPassword);
  }

  selectRole(role) {
    cy.get(this.locators.role(role)).click();
  }

  submit() {
    cy.get(this.locators.submitButton).click();
  }

  verifyErrorMessage() {
    cy.get(this.locators.errorMessage).should('exist');
  }
}

export default RegisterPage;
