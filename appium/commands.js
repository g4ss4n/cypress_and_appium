// commands.js
const chalk = require('chalk');
const { exec } = require('child_process');

let successfulCommands = [];

async function environmentSelection(driver, environment) {
  const imageView = await driver.$('//android.widget.ImageView[@resource-id="agwaHeaderLogo"]');
  // Perform 4 clicks on the ImageView
  for (let i = 0; i < 4; i++) {
    await imageView.click();
    await driver.pause(1000); // Optional: Add a pause to wait between clicks
  }

  const env = await driver.$(`//android.view.ViewGroup[@resource-id="environmentItem-${environment}"]`);
  await env.click();

  const backButton = await driver.$('//android.view.ViewGroup[@resource-id="headerBackButton"]/android.widget.ImageView');
  await backButton.click();

  successfulCommands.push('environmentSelection');
}

async function signIn(driver) {
  const signInButton = await driver.$('android=new UiSelector().text("SIGN IN")');
  await signInButton.click();

  successfulCommands.push('signIn');
}

async function enterAndSendEmail(driver, email) {
  const emailInputElement = await driver.$('//android.widget.EditText[@resource-id="emailInput"]');
  await emailInputElement.setValue(email);

  const sendEmailButton = await driver.$('//android.view.ViewGroup[@resource-id="sendEmailButton"]');
  await sendEmailButton.click();

  successfulCommands.push('enterAndSendEmail');
}

async function codeInput(driver, code) {
  const firstTextViewInCodeInputs = await driver.$('//android.view.ViewGroup[@resource-id="codeInputsContainer"]/android.widget.TextView[1]');
  await firstTextViewInCodeInputs.click();

  const codeTextInput = await driver.$('//android.widget.EditText[@resource-id="codeTextInput"]');
  await codeTextInput.setValue(code);

  successfulCommands.push('codeInput');
}

async function allowPermissions(driver) {
  const allowButton = await driver.$('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
  await allowButton.waitForDisplayed({ timeout: 20000 });
  await allowButton.click();

  successfulCommands.push('allowPermissions');
}

async function stopAppiumServer() {
  console.log('Sending request to stop the server');
  exec('pkill -f "appium"', (error, stdout, stderr) => {
    if (error) {
      console.error('Error stopping Appium server:', error);
      return;
    }
    console.log('Appium server stopped successfully.');
  });
}

function printSuccess() {
  console.log(chalk.green(`The sanity test passed. Successful commands: ${successfulCommands.join(', ')}`));
}

function extractFailedCommand(stack) {
  // Extract the failed command from the stack trace
  const match = stack.match(/Object\..+ \((.+)\)/);
  return match ? match[1] : null;
}

module.exports = {
  environmentSelection,
  signIn,
  enterAndSendEmail,
  codeInput,
  allowPermissions,
  printSuccess,
  extractFailedCommand,
  stopAppiumServer,
};

