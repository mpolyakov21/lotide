const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

const data3 = [1, 66, 44, 5557, 2, -1, 2, -4666, 5];
const expected3 = [1, 2, 5, 7, 2];
const results3 = takeUntil(data3, x => x < 0);
assertArraysEqual(results1, expected3);