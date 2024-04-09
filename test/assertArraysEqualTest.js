
const assertArraysEqual = require("../assertArraysEqual");
//TEST CODE
assertArraysEqual([1,2,3], [1,2,3]); // should pass
assertArraysEqual([1,2,3], [1,2]); // should fail
