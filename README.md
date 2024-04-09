# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @codemaksym/lotide`

**Require it:**

`const _ = require('@codemaksym/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- head(array): Returns the first element of an array.
- tail(array): Returns all elements of an array except the first one.
- middle(array): Returns the middle element(s) of an array.
- assertArraysEqual(actual, expected): Compares two arrays and prints a message indicating whether they are equal.
- assertEqual(actual, expected): Compares two primitive values and prints a message indicating whether they are equal.
- eqArrays(array1, array2): Checks if two arrays are equal.
- assertObjectsEqual(actual, expected): Compares two objects and prints a message indicating whether they are equal.
- countLetters(string): Counts the occurrences of each letter in a string and returns an object with the counts.
- countOnly(allItems, itemsToCount): Counts the occurrences of specified items in an array based on a provided object with items to count.
- eqObjects(object1, object2): Checks if two objects are equal.
- findKey(object, callback): Returns the first key for which a provided function returns a truthy value in an object.
- findKeyByValue(object, value): Finds a key in an object based on its corresponding value.
- letterPositions(string): Returns an object with arrays indicating the positions of each letter in a string.
- takeUntil(array, callback): Returns elements from an array until a provided condition is met.
- without(source, itemsToRemove): Returns a new array with all occurrences of specified elements removed.