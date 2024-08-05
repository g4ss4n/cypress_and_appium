module.exports = {
  capabilities: {
    'appium:platformName': 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Nexus_6P_API_33',
    'appium:app': getAppPath(),
    'appium:skipDeviceInitialization': true,
    'appium:appWaitForLaunch': false,
    'appium:systemPort': 8210,
    'appium:newCommandTimeout': '600',
    'appium:autoAcceptAlerts': true,
  },
  wdOpts: {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    logLevel: 'info',
  },
};

function getAppPath() {
  if (process.env.GITHUB_ACTIONS) {
    return ''; // GitHub Actions
  } else {
    return '/Users/ghassangharzuzy/cypress_and_appium/nativeApps/Android/simple-demo.apk'; // Local
  }
}
