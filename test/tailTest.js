const assert = require('chai').assert;
const tail = require("../tail");

describe('tail', function() {
  it('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', function() {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it('should return an empty array for ["test"]', function() {
    const result = tail(["test"]);
    assert.deepEqual(result, []);
  });

  it('should return an empty array for an empty array', function() {
    const result = tail([]);
    assert.deepEqual(result, []);
  });
});