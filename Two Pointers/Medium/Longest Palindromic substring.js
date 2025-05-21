/**
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 */

//Note: Brute force approach where a palindrome is checked for each char expanding from left to right gives time limit exceeded error

/**
    The idea here is to check each char for a palindrome.
    Instead of checking from start of a char and then expanding to left of the string, expand from center.
    A palindrome mirrors around its center
    Consider, 'b a b a d'. Consider index 1, char a. 
    If I expand from a towards left and right we get index 0(char b) and index 2(char b). So, bab is a palindrome.
    So, I will use 'expand from center' idea to check for a palindrome
    Now, palindrome can be of even length and odd length
    To check for a odd length, center starts from i and i
    For even length , center starts from i - 1 and i
  */
const longestPalindrome = (str) => {
  if (str.length === 1) {
    return str;
  }
  let start = 0,
    maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    const odd = expandCenter(i, i, str);
    const even = expandCenter(i - 1, i);
  }
};

const expandCenter = (left, right, str) => {
  while (left >= 0 && right <= str.length - 1 && str[left] === str[right]) {
    left++;
    right--;
  }
  //Loop will end with extra left++ and extra right-- so reduce
  left++;
  right--;
  let currenLen = right - left + 1;
  if (currenLen > maxLen) {
    maxLen = currenLen;
    start = left;
  }
};
