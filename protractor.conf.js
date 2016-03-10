exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests/e2e/*.js'],
  capabilities:
    {
      browserName: 'chrome'
    },
  baseUrl: 'http://color.com:8080',
  allScriptsTimeout: 11000,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
}
