/**
 * https://leetcode.com/problems/happy-number/
 */

/**
    For solution explanation see Leetcode's solution
    https://leetcode.com/problems/happy-number/solution/
 */

var isHappy = function (num) {
  let seen = new Set();
  while (num != 1 && !seen.has(num)) {
    seen.add(num);
    num = getNext(num);
  }
  return num === 1;
};

const getNext = (num) => {
  let sum = 0;
  while (num > 0) {
    let rightDigit = num % 10;
    num = Math.floor(num / 10);
    sum += rightDigit * rightDigit;
  }
  return sum;
};

/**
 Approach 1: Using map

 The squaring digits and adding them up could result in following scenarios
 1. It eventually gets to 1
 2. It eventually gets stuck in a cycle
 3. It keeps getting higher and higher up towrds infinity -  this option rules out because number would not go up to infinity

 It it gets stuck in a cycle then we need to keep a map to record the sqaures seen so far.
  */
var isHappy = function (num) {
  let square = 0,
    seen = {}; //to record sqaures seen so far
  while (num >= 1) {
    let rightMostDigit = num % 10;
    square += rightMostDigit * rightMostDigit;
    num = Math.floor(num / 10);
    if (num === 0) {
      //if num is 0 check for the sqaure
      if (square === 1) return true;
      if (square > 0 && seen[square] === undefined) {
        seen[square] = square;
      } else {
        //if sqaure already exists it means its stuck in a cycle and its not a happy number
        return false;
      }
      num = square;
      square = 0; //reset square
    }
  }
};

/**
    Using fast and slow pointers
    Time: O(logn) - understand time complexity
    Space: O(1)
 */

var isHappy = function (num) {
  let slow = num,
    fast = num;
  while (true) {
    slow = findSquare(slow); //move one step ahead
    fast = findSquare(findSquare(fast)); //move two steps ahead
    if (slow === fast) {
      //found the cycle
      break;
    }
  }
  return slow === 1;
};

const findSquare = (num) => {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10; //extract rightmost digit
    sum += digit * digit;
    num = Math.floor(num / 10); //extract leftmost digit
  }
  return sum;
};
