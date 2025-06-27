//https://leetcode.com/problems/encode-and-decode-strings/

/**
Aishwarya

Approach 1: Using Unicode char encoding (non-ASCII delimiter)
In the problem constraint it is mentioned that characters are ASCII characters.
That is why we can use Unicode char for encoding.
This approach is simple and effective as long as we can be sure that the delimiter char won't
appear in the strings.
But, non-ASCII chars can sometines be tricky to handle because not 'all' systems or software handle non-ASCII chars in the same way

Note: How to input Unicode from MacBook?
Option + any key (π -> Option + P)

N - length of array
k - avg length of a word in the string

Time: O(N)
Space: O(N*k)

 */

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  let enodedStr = "";
  for (let str of strs) {
    enodedStr += str + "π";
  }
  console.log(enodedStr);
  return enodedStr;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  let result = s.split("π");
  result.pop();
  return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
