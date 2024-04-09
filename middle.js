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

module.exports = middle;