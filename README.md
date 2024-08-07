# Cypress & Appium

## Cypress Test Suite
This project uses Cypress for end-to-end testing of a login and logout flow.

### Setup:
1. Clone this repo
2. Install Dependencies - ```npm install```

### Running Tests
- To open the Cypress Test Runner, use: ```npm run cypress```
- To run the Cypress tests headless, use: ```npm run cypress-headless```


## Appium Test Suite
This project uses Appium for automating mobile application testing.

### Setup:
1. Clone this repo
2. Install Dependencies using ```npm install```
3. Install Emulator - Make sure you have Android Studio
4. Install Appium using ```npm install -g appium```
5. Install UIAutomator2 driver and dependencies using ```appium driver install uiautomator2@2.0.1```
6. To validate you have the driver installed run ```appium driver list --installed```

### Custom Commands
1. ```allowPermissions(driver):``` Handle permission prompts.
2. ```validateElementText(driver, elementId, expectedText):``` Validate the text of an element.
3. ```clickElementById(driver, elementId):``` Click on an element by its ID.
4. ```stopAppiumServer():``` Stop the Appium server.

### Running Tests
To run the Appium tests
1. Make sure to open android emulator and name it (AVD Name): ```Nexus_6P_API_33``` or modify the configuraition file to the AVD name you wish to run the test on
2. Run the Appium Server using: ```npm run appium-server```
3. Run the Appium Test (client) using: ```npm run android-sanity```

### The suite includes:
- Basic App Test: Validates elements' text and clicks on the "SKIP" button.

### File Structure
- commands.js: Utility functions.
- config.js: Configuration.
