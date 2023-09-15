/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 */
var searchRange = function(arr, target) {
  const firstPos = finsPosition(arr, target, true)
  if(firstPos === -1) return [-1,-1]
  const lastPos = finsPosition(arr, target, false)
  return [firstPos, lastPos]
};

const finsPosition = (arr, target, isFirst)=>{
  let left = 0,
      right = arr.length - 1,
      ans = -1;
  while(left <= right){
      let mid = left + Math.floor((right - left) / 2);
      if(arr[mid] === target){
          ans = mid
          isFirst ? right = mid - 1 : left = mid + 1
      }else if(arr[mid] > target){
          right = mid - 1
      }else{
          left = mid + 1
      }
  }
  return ans;
}