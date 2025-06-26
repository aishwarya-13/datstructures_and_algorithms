/**
 * https://leetcode.com/problems/valid-anagram/
 */

/**
    Using a map and two different count variables
 Time: O(N + M) N is the length of string 's', M is the length of string 't'
 Space: O(N)
  */
var isAnagram = function (s, t) {
  let map = {},
    count1 = 0,
    count2 = 0;
  for (let char of s) {
    if (map[char] === undefined) {
      map[char] = 0;
      count1++;
    }
    map[char]++;
  }
  for (let char of t) {
    if (char in map && map[char] > 0) {
      //imp to check the frequency count as well else delete the key
      map[char]--;
      if (map[char] === 0) {
        count1--;
      }
    } else {
      count2++;
    }
  }
  if (count1 === 0 && count2 === 0) {
    return true;
  }
  return false;
};

/**
    Maintain a map to store the character and its frequency.
    Iterate str1 to load the map and calculate the length of map
    Iterate str2:
        1]If a char does not exist in the map -> add it in the map and increase the map length
        2]If a char does exist int the map -> Reduce its freq from the map and delete the key when 0
        At the end of iteration check the mapLen variable.
            1]If its is 0 means:Valid anagram
            2]If non-zero means not an anagram
    Time: O(N)+(M)
    Space: O(N)
  */
const isAnagram = (str1, str2) => {
  let map = {},
    mapLen = 0;
  for (let char of str1) {
    if (map[char] === undefined) {
      map[char] = 0;
      mapLen++;
    }
    map[char]++;
  }
  for (let char of str2) {
    if (map[char] !== undefined) {
      map[char]--;
      if (map[char] === 0) {
        delete map[char];
        mapLen--;
      }
    } else {
      map[char] = char;
      mapLen++;
    }
  }
  return mapLen === 0;
};
