module.exports = {
  user: {
    environment: 'test',
    email: 'test@email.com',
    code: '555555',
  },
  capabilities: {
    alwaysMatch: {
      platformName: 'Android',
      automationName: 'UiAutomator2',
      deviceName: 'Samsung Galaxy S22 Ultra',
      platformVersion: '12.0',
      app: 'bs://sample.app',
      skipDeviceInitialization: true,
      appWaitForLaunch: false,
      systemPort: 8210,
      newCommandTimeout: '600',
      logLevel: 'debug',
      autoAcceptAlerts: true,
      'bstack:options': {
        userName: 'ghassangharzuzy_xV87Yw',
        accessKey: 'Cszk2MHHD6VTnjPvCy41',
        buildName: 'browserstack-build-1',
        projectName: 'BrowserStack Sample',
        sessionName: 'Automated Test Session',
      }
    }
  },
  wdOpts: {
    protocol: 'https',
    hostname: 'hub-cloud.browserstack.com',
    port: 443,
    path: '/wd/hub',
    logLevel: 'info',
  },
};
