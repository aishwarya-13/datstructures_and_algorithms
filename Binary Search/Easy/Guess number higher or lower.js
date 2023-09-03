/**
 * https://leetcode.com/problems/guess-number-higher-or-lower/description/
 */

var guessNumber = function(n) {
  let left = 1,
      right = n;
  while(left <= right){
      let mid = left + Math.floor((right - left) / 2)
      if(guess(mid) === 0){
          return mid
      }else if(guess(mid) === -1){
          right = mid - 1
      }else{
          left = mid + 1
      }
  }
  return null
};