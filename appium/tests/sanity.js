const { remote } = require('webdriverio');
const commands = require('../commands');
const config = require('../config');

async function runTest() {
  const driver = await remote({ ...config.wdOpts, capabilities: config.capabilities });

  try {
//    await commands.allowPermissions(driver);

    await commands.validateElementText(driver, 'cm.aptoide.pt:id/title', 'Discover the Best Apps');

    await commands.validateElementText(driver, 'cm.aptoide.pt:id/description', 'No content restrictions for you to find top apps');

    await commands.validateElementText(driver, 'cm.aptoide.pt:id/skip_button', 'SKIP');

    await commands.clickElementById(driver, 'cm.aptoide.pt:id/skip_button');

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
