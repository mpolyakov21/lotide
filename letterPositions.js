const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const positions = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== " ") {
      if (!positions[char]) {
        positions[char] = [];
      }
      positions[char].push(i);
    }
  }

  return positions;
};

const result = letterPositions("lighthouse");
assertEqual(result["l"][0], 0);