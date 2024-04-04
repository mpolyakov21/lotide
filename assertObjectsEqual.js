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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if both objects have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Loop through keys of one object (assumption: both objects have same keys)
  for (const key of keys1) {
    // Check if the value associated with the key is an array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If both values are arrays, use eqArrays function to compare
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // If values are not arrays, use strict equality operator (===) to compare
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertObjectsEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertObjectsEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
