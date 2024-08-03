const assert = require('assert');
const { exec } = require('child_process');

let successfulCommands = [];

// Utility function to validate the text of an element
async function validateElementText(driver, elementId, expectedText) {
  const element = await driver.$(`id=${elementId}`);
  const actualText = await element.getText();
  assert.strictEqual(actualText, expectedText, `Text for element ${elementId} does not match. Expected: "${expectedText}", but got: "${actualText}"`);
  successfulCommands.push('validateElementText: ' + expectedText);
  return element;
}

// Utility function to click on an element by its ID
async function clickElementById(driver, elementId) {
  const element = await driver.$(`id=${elementId}`);
  await element.click();
  successfulCommands.push('clickElementById: ' + elementId);
}

// Utility function to handle the "Allow Permissions" prompt
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
  validateElementText,
  clickElementById,
  allowPermissions,
  printSuccess,
  extractFailedCommand,
  stopAppiumServer,
};
