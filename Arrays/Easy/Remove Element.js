/**
 * https://leetcode.com/problems/remove-element/
 */

/**
Since relative order is required both the pointers need to be placed at the start
 i pointer will track non-val elements
 j is the placeholder for non-val elements
 When i points to a non-val value swap the jth element with ith element and move the j pointer ahead.
 Time: O(N)
 Space: O(1)
 */
 var removeElement = function(nums, val) {
    let i = 0,//to iterate array
        j = 0;//placeholder for non-val elements
    while(i < nums.length){
        if(nums[i] !== val){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
        i++;
    }
    return j;
};