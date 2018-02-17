var Application = require('spectron').Application;
var assert = require('assert'),
{describe,it,after,before}=require('selenium-webdriver/testing');

describe('application launch', function () {
  this.timeout(150000)

  beforeEach(function () {
    this.app = new Application({
      path: 'D:/Electron/Electron API Demos-win32-ia32/Electron API Demos.exe'
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('shows an initial window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
    })
  })

  
})