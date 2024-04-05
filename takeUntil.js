const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`,
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`,
    );
  }
};
const eqArrays = function(arr1, arr2) {
  // Check if the length of the arrays are equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Check if each element at the same index in both arrays are equal
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    // Call the callback with the current item
    if (callback(item)) {
      // If the callback returns true, stop collecting items
      break;
    }
    // Otherwise, collect the item
    result.push(item);
  }
  return result;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);