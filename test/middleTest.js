const middle = require("../middle");
const eqArrays = require("../eqArrays");
const assert = require('chai').assert;
// TEST CODE
describe('middle', function() {
  it('should return [3, 4] for [1, 2, 3, 4, 5, 6]', function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it('should return [] for [1]', function() {
    assert.deepEqual(middle([1]), []);
  });

  it('should return [3] for [1, 2, 3, 4, 5]', function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});