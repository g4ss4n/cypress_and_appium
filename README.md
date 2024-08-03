# Cypress & Appium

### Cypress Test Suite
- This project uses Cypress for end-to-end testing of a login and logout flow.
- This README provides information on how to set up, run, and understand the Cypress tests.

### Setup:
1. Clone this repo
2. Install Dependencies - ```npm install```


### Custom Commands
1. ```visitLoginPage(url):``` Navigate to the login page.
2. ```performLogin(username, password):``` Log in with provided credentials.
3. ```verifySuccessfulLogin():``` Confirm successful login.
4. ```pageOverview():``` Check key elements on the logged-in page.
5. ```performLogout():``` Log out and verify redirection.

### Running Tests
- To open the Cypress Test Runner, use: ```npm run cypress```

### The suite includes:
- Login and Logout Test: Logs in, verifies login, performs a page overview, and logs out.

### File Structure
- cypress/support/commands.js: Custom commands.
- cypress/integration/login.spec.js: Test cases.
