const middle = require("../middle");
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
// TEST CODE
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
console.log("");
assertArraysEqual(middle([1]), [4]);
console.log("");
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);