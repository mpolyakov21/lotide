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
let middle = function(arr) {

  const length = arr.length;
  if (length <= 2) {
    return [];
  } else if (length % 2 === 0) {
    const middleIndex = length / 2 - 1;
    return [arr[middleIndex], arr[middleIndex + 1]];
  } else {
    const middleIndex = Math.floor(length / 2);
    return [arr[middleIndex]];
  }
};
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
console.log("");
assertArraysEqual(middle([1]), [4]);
console.log("");
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);