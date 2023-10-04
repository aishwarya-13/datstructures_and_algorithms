/**
 * https://leetcode.com/problems/3sum/description/
 */

/**
1] Sort the nums array. Why we need to sort? Because we will be moving the start and end pointers based on a sum that is smaller or greater than the target like in two sum problem.
2] Pick the ith element take a negative of it.This will be the target.
3] From i+1 to end find two elements whose sum is equal to the target.
    i)If sum is greater decrement the end pointer
    ii)If the sum is smaller increment the start pointer
    iii)If sum is equal, add it in result array and keep on searching for another pair in the current set of array.
        a) Skip if elements are duplicates

Here we cannot compare nums[i] === nums[i+1] to skip duplicates because in case of [-4,-1,-1,0,1,2] we would skip the result [-1,-1,2] so first take the result then check if previous nums[i-1] is duplicate then discard it
**/
/**
Time complexity: Sorting-> O(NlogN)
for loop: O(N)
while loop :O(N). While loop will run for every element in the array So, O(N^2)
Total: O(NlogN + N^2) ~ O(N^2)
**/
const threeSum = (nums)=>{
  nums.sort((a,b)=> a-b)
  let result = [];
  for(let i=0; i<nums.length; i++){
      if(i>0 && nums[i] === nums[i-1]) continue //skip duplicates
      let target = -(nums[i])
          left = i+1,
          right = nums.length-1;
      while(left < right){
          let sum = nums[left] + nums[right]
          if(sum > target){
              right--
          }else if(sum < target){
              left++
          }else{
              result.push([nums[i], nums[left], nums[right]])
              while(nums[left] === nums[left+1]) left++ //skip duplicates
              while(nums[right] === nums[right-1]) right-- //skip duplicates
              left++ //go on to find another set
              right-- //go on to find another set
          }
      }
  }
  return result
}
