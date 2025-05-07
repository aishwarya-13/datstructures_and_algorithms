/**
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/description/
 */

/**
 Sorting + Binary Search
 Time: O(N * logN)
 Space: O(logN) -> Space taken by sorting algo
  */
var checkIfExist = function (arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i],
      double = ele * 2,
      doubleIndex = binarySearch(arr, double);
    if (doubleIndex > 0 && doubleIndex !== i) {
      //if target index found also check both indices are not equal
      return true;
    }
  }
  return false;
};

const binarySearch = (arr, target) => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid; //if target found then return index
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1; //if target not found then return -1
};

var checkIfExist = function (arr) {
  let set = new Set();
  for (let num of arr) {
    if (set.has(num * 2) || set.has(num / 2)) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
};

var checkIfExist = function (arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i] / 2] !== undefined || map[2 * arr[i]] !== undefined) {
      return true;
    } else {
      map[arr[i]] = arr[i];
    }
  }
  return false;
};
