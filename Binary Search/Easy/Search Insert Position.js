/**
 * https://leetcode.com/problems/search-insert-position/
 */

const searchInsert = (nums, target)=>{
    let left = 0,
        right = nums.length - 1;
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] > target){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return left;
     /**
        why return left?
        What if the target is not found?
        In this case, the loop will be stopped at the moment when right < left and nums[right] < target < nums[left]. Hence, the proper position to insert the target is at the index left.
        When target is not in the array low === high. When the loop terminates low becomes > right. Can return right + 1 as well
     */
};