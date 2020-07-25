exports.config = {
  specs: ['./test-ui-tc1.js', './test-ui-tc2.js', './test-ui-tc3.js'],
  directConnect: true,
  framework: 'jasmine2',
  allScriptsTimeout: 11000,

  capabilities: {
    browserName: 'chrome',
    //chromeOptions: { args: ["--headless", "--disable-gpu", "--disable-translate", "--window-size=1200,900"] },
    chromeOptions: {args: [ "--disable-translate", "--window-size=1200,900" ]},
    acceptInsecureCerts: true,
    count: 1
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,    
    includeStackTrace: true,
    print: function () { }
  },
  onPrepare: function () {
    //Max-Windows dosent work in Headless
    //browser.driver.manage().window().maximize();    
    //var AllureReporter = require('jasmine-allure-reporter');
    /*
    jasmine.getEnv().addReporter(new AllureReporter({ resultsDir: 'reports/frontend' }));
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
    */

    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));

  }
};
