/**
 Asked in interview - I did it this way
  */
var twoSum = function (arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - Math.abs(arr[i]);
    if (map[arr[i]] === undefined) {
      map[diff] = arr[i];
    } else {
      return [arr[i], map[arr[i]]];
    }
  }
  return [-1, -1];
};
