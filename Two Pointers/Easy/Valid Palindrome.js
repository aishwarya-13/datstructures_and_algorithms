/**
 * https://leetcode.com/problems/valid-palindrome/
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
Time: O(N)
Space: O(1)
 */
var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    const isLeftLetterOrDigit = isLetterOrDigit(s[left]),
      isRightLetterOrDigit = isLetterOrDigit(s[right]);
    if (isLeftLetterOrDigit && isRightLetterOrDigit) {
      // convert to lowercase per character to avoid O(N) space
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    } else {
      if (!isLeftLetterOrDigit) {
        left++;
      }
      if (!isRightLetterOrDigit) {
        right--;
      }
    }
  }
  return true;
};

const isLetterOrDigit = (char) => {
  const charcode = char.charCodeAt();
  return (
    (charcode >= "a".charCodeAt() && charcode <= "z".charCodeAt()) ||
    (charcode >= "A".charCodeAt() && charcode <= "Z".charCodeAt()) ||
    (charcode >= "0".charCodeAt() && charcode <= "9".charCodeAt())
  );
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
    Time: O(N)
    replace() takes O(N)
    toLowerCase() takes O(N)

    Space: O(N)
    replace takes O(N)
    toLowerCase takes O(N)
  */
var isPalindrome = function (s) {
  let str = s.replace(/[^0-9a-z]/gi, "");
  console.log("str", str);

  if (!str) return true;

  str = str.toLowerCase();

  let left = 0,
    right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
    Without using regular expression
 */
var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1,
    str = s.toLowerCase();
  while (left <= right) {
    if (isChar(str[left]) && isChar(str[right])) {
      if (str[left] === str[right]) {
        left++;
        right--;
      } else {
        return false;
      }
    } else if (!isChar(str[left]) && isChar(str[right])) {
      left++;
    } else {
      right--;
    }
  }
  return true;
};

const isChar = (char) => {
  if (
    (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) || //its an alphabet
    (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
  ) {
    //its a number
    return true;
  }
  return false;
};

////////////////////////////////////////////////////////////////////////////////

/**
Time: O(N)
Space: O(N)
 */
var isPalindrome = function (s) {
  let str = s.replace(/[^0-9a-z]/gi, ""); //Remove all characters from the string s that are not letters or digits.
  let left = 0,
    right = str.length - 1;
  while (left <= right) {
    if (str[left].toLowerCase() === str[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

////////////////////////////////////////////////////////////////////////////////
