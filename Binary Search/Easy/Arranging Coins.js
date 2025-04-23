/**
 *https://leetcode.com/problems/arranging-coins/description/
 */
/**
 This is a good question on Binary Search
 To calculate the sum of 1 to n numbers. there is a formula -> n(n+1)/2 - Why this formula? Refer to Neetcode solution on this.
  */
var arrangeCoins = function (n) {
  let result = 0,
    left = 1,
    right = n;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2), //how many staricases? mid is the guess
      coins = (mid / 2) * (mid + 1); //how many coins needed to buoid the staircase?
    if (coins > n) {
      //number of coins required to build mid'th staircase is more so go left
      right = mid - 1;
    } else {
      //if its less or equal to given number of coins then we could build more so go right
      left = mid + 1;
      result = Math.max(result, mid); //but save the result before goinf right
    }
  }
  return result;
};

//Using Math
var arrangeCoins = function (n) {
  let count = 0, //count the number of stairs
    i = 1; //to decrease the number of coins
  while (i <= n) {
    n = n - i;
    if (n >= 0) {
      count++;
    }
    i++;
  }
  return count;
};
