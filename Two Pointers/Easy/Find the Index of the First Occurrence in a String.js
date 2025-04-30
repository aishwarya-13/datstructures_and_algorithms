/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/**
 Two pointers
 Self
 Logic: When first char match is found go on to find the whole word match

 Mistake: You thought you could return the index of haystack where it didnt find the match? No you cannot do that
 Bs: haystack = "mississippi" needle ="issip". 
Time: N-length of haystack M-length of needle O(N*M)
Space: O(1)
  */
var strStr = function (haystack, needle) {
  let h = 0,
    n = 0;
  while (h < haystack.length) {
    if (haystack[h] === needle[0]) {
      //found first char match then go on to check whole char
      const isFound = findIndex(haystack, h, needle, 0);
      if (isFound) {
        return h;
      }
    }
    h++;
  }
  return -1;
};

const findIndex = (haystack, h, needle, n) => {
  while (n < needle.length) {
    if (needle[n] !== haystack[h]) {
      return false; //no match found
    } else {
      h++;
      n++;
    }
  }
  return true;
};
/**
 Why iterate till haystack.length - needle.length?
 This is because we want to make sure that we don't run past the end of the haystack string while searching
 for the needle string.
 Time Complexity: O(n*m), where n is the length of the haystack string and m is the length of the needle string.
 The for loop iterates over n - m + 1 possible starting indices, and the while loop compares at most m characters
 for each index.
  */
var strStr = function (haystack, needle) {
  for (let h = 0; h <= haystack.length - needle.length; h++) {
    let n = 0;
    while (n < needle.length && haystack[h + n] === needle[n]) {
      n++;
    }
    if (n === needle.length) {
      return h;
    }
  }
  return -1;
};
