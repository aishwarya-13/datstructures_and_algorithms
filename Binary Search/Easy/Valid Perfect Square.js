/**
 * https://leetcode.com/problems/valid-perfect-square/description/
 */
  //Time: O(log N) Space: O(1)
  var isPerfectSquare = function(num) {
    let left = 1,
        right = num;
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2),
            square = mid * mid
        if(square === num){
            return true
        }else if(square > num){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return false
};
