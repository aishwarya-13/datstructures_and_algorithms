/**
 * https://leetcode.com/problems/string-compression/
 */

/**
    Using two pointers

    Time: O(N)
    Space: O(1)
  */
var compress = function (chars) {
  let read = 0,
    write = 0;
  while (read < chars.length) {
    let currentChar = chars[read];
    let count = 0;

    //Count the number of occurrences of the character
    while (read < chars.length && chars[read] === currentChar) {
      count++;
      read++;
    }
    //write the character
    chars[write] = currentChar;
    write++;
    //write the count if more than 1
    if (count > 1) {
      let countStr = count.toString();
      for (let i = 0; i < countStr.length; i++) {
        chars[write++] = countStr[i];
      }
    }
  }
  return write;
};
