/**
 * https://leetcode.com/problems/sqrtx/description/
 */

 //[1,2,3,4,5,6,7,8]
 var mySqrt = function(x) {
  let left = 1,
      right = x,
      ans = 0;
  while(left <= right){
      let mid = left + Math.floor((right - left)/ 2),
          sqr = mid * mid;
      if(sqr === x){//if its a perfect square
          return mid;
      }else if(sqr > x){
          right = mid - 1;
      }else{
          ans = mid
          left = mid + 1;
      }
  }
  return ans;
};

/**
 * @param {number} x
 * @return {number}
 */
 //[1,2,3,4,5,6,7,8]
 var mySqrt = function(x) {
  let left = 1,
      right = x;
  while(left <= right){
      let mid = left + Math.floor((right - left)/ 2),
          sqr = mid * mid;
      if(sqr === x){//if its a perfect square
          return mid;
      }else if(sqr > x){
          right = mid - 1;
      }else{
          left = mid + 1;
      }
  }
  return right;//if its not a pefect square ex: x=8
};
