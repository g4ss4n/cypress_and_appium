const { remote } = require('webdriverio');
const commands = require('../commands');
const config = require('../config');

async function runTest() {
  const driver = await remote({ ...config.wdOpts, capabilities: config.capabilities });

  try {
    // Allow notifications
    await driver.pause(2000); // Wait for the notification prompt to appear
    const allowButton = await driver.$('~Allow'); // Replace with the appropriate selector for the "Allow" button
    await allowButton.click();

    // Click on skip
    await driver.pause(2000); // Wait for the skip button to appear
    const skipButton = await driver.$('~Skip'); // Replace with the appropriate selector for the "Skip" button
    await skipButton.click();

    commands.printSuccess();
    await driver.pause(10000);
  } catch (error) {
    console.error('Test failed:', error.message);
    const failedCommand = commands.extractFailedCommand(error.stack);
    if (failedCommand) {
      console.error('Failed command:', failedCommand);
    }
    await commands.stopAppiumServer();
    process.exit(1);
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
    await commands.stopAppiumServer();
  }
}

runTest().catch(console.error);
