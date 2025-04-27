/**
 * https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/description/
 */

/**
 Aishwarya

 Note to self: Improvise how to extend bounds

 Take the first two indices 0 amd 1 as left and right boundaries.
 If target is not in the boundary then go right.
 How to go right? Left boundary becomes right and right boundary is extended twice
 If values lies within the boundaries then perform BS else keep on extending boundaries till correct boundaries are found

 Time: O(log N)
 Space: O(1)
  */
var search = function (reader, target) {
  let left = 0,
    right = 1;

  //Increase bounds until the correct boundaries are found
  while (reader.get(right) < target) {
    left = right;
    right = right * 2;
  }

  //perform BS
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2),
      valAtMid = reader.get(mid);
    if (valAtMid === target) {
      return mid;
    } else if (valAtMid > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

/**
 Note to self: Even though constraints are given. We need to find the array bounds dynamically.
 So do not solve like you did previously here
 https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/submissions/1618984338/

 Take the first two indices 0 amd 1 as left and right boundaries.
 If target is not in the boundary then go right.
 How to go right? Left boundary becomes right and right boundary is extended twice
 If values lies within the boundaries then perform BS else keep on extending boundaries till correct boundaries are found

 Time: O(log N)
 Space: O(1)
  */
var search = function (reader, target) {
  let left = 0,
    right = 1;
  while (left <= right) {
    let valAtRight = reader.get(right);
    if (valAtRight < target) {
      //extend boundaries
      left = right;
      right = right * 2;
    } else {
      //perform BS
      let mid = left + Math.floor((right - left) / 2),
        valAtMid = reader.get(mid);
      if (valAtMid === target) {
        return mid;
      } else if (valAtMid > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
};

/**
 This is BS problem.
 The only difference here is that right bounds are unknown.
 But in the constraints it is given -> 1 <= secret.length <= 10 ** 4
 That means min array lenght is 1 and max lenght is 10 ** 4.
 So, 10 ** 4 can be the right bound

 Time: O(log N)
 Space: O(1)
  */
var search = function (reader, target) {
  let left = 0,
    right = 10 ** 4;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2),
      valAtMid = reader.get(mid);
    if (valAtMid === target) {
      return mid;
    } else if (valAtMid > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
