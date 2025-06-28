//https://leetcode.com/problems/encode-and-decode-strings/

/**
Aishwarya

Approach 2: Escaping
Delimiter /:
Iterate over each string char by char
When iterating a string, if a char is / then add another / to escape it
After all chars in a string are processed, add /:

Decoding
1. If a char is /, check next char
    a. If next char is also / (//), it means we need to escape it bz original string had a /
    So add a / and move next
    b. If next char is : (/:) it is our delimiter

N - length of array
k - length of each word
Time: O(N*k)
Space: O(N*K)
 */

var encode = function (strs) {
  let encodedStr = "";
  for (let str of strs) {
    for (let char of str) {
      if (char === "/") {
        encodedStr += "/";
      }
      encodedStr += char;
    }
    encodedStr += "/:";
  }
  console.log(encodedStr);
  return encodedStr;
};

var decode = function (s) {
  let result = [],
    str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "/" && s[i + 1] === "/") {
      str += "/";
      i++;
    } else if (s[i] === "/" && s[i + 1] === ":") {
      i++;
      result.push(str);
      str = "";
    } else {
      str += s[i];
    }
  }
  return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

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

var encode = function (strs) {
  let enodedStr = "";
  for (let str of strs) {
    enodedStr += str + "π";
  }
  console.log(enodedStr);
  return enodedStr;
};

var decode = function (s) {
  let result = s.split("π");
  result.pop();
  return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
