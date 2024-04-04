const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(sentence) {
  const letterCount = {};
  for (const char of sentence) {
    if (char !== " ") {
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
  }

  return letterCount;
};

const result = countLetters("HAPPY");
assertEqual(result["P"], 2);