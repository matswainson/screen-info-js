var assert = require('assert');
const screenInfo = require('./');

  describe('screenInfo', function() {
    it('screen height === "undefined"', function() {
      assert.equal(screenInfo.height, undefined);
    });
  });