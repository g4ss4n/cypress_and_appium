const { remote } = require('webdriverio');
const commands = require('../commands');
const config = require('../config');
const elementIds = require('../elementIds');

async function runTest() {
  const driver = await remote({ ...config.wdOpts, capabilities: config.capabilities });

  try {
    await commands.allowPermissions(driver);
    await commands.validateElementText(driver, elementIds.titleId, 'Discover the Best Apps');
    await commands.validateElementText(driver, elementIds.descriptionId, 'No content restrictions for you to find top apps');
    await commands.validateElementText(driver, elementIds.skipButtonId, 'SKIP');
    await commands.clickElementById(driver, elementIds.skipButtonId);

    await driver.pause(10000);

  } catch (error) {
    console.error('Test failed:', error.message);
    await commands.stopAppiumServer();
    process.exit(1);

  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
    await commands.stopAppiumServer();
  }
}

runTest().catch(console.error);
