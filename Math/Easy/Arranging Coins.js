/**
 * https://leetcode.com/problems/arranging-coins/description/
 */

var arrangeCoins = function(n) {
  let ans = 0,
      i = 1
  while(i <= n){
      ans++
      n = n - i
      i++
  }
  return ans
};

/**
 Start iterating from 1 to n
 With each itertion reduce n by i amount and increase result count
 At the end of iteration we get the result;
 Time: O(N)
 Space: O(1)
  */
 var arrangeCoins = function(n) {
  let result = 0;
  for(let i=1; i<= n; i++){
      n-=i;
      result++;
  }
  return result;
};