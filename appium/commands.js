const assert = require('assert');

async function validateElementText(driver, elementId, expectedText) {
  const element = await driver.$(`id=${elementId}`);
  const actualText = await element.getText();
  assert.strictEqual(actualText, expectedText, `Text for element ${elementId} does not match. Expected: "${expectedText}", but got: "${actualText}"`);
  return element;
}

async function clickElementById(driver, elementId) {
  const element = await driver.$(`id=${elementId}`);
  await element.click();
}

async function allowPermissions(driver) {
  try {
    const allowButton = await driver.$('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
    await allowButton.waitForDisplayed({ timeout: 20000 });
    await allowButton.click();
    console.log('Permissions allowed successfully');
  } catch (error) {
    console.error('Failed to allow permissions:', error.message);
  }
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

module.exports = {
  validateElementText,
  clickElementById,
  allowPermissions,
  stopAppiumServer,
};
