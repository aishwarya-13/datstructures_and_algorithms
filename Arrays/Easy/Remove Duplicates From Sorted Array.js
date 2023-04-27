/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
Two pointer approach
Place both the pointers at 0th position
Increase i until val at i!= val at j
Then increase j to make place for unique element and replace val at j with val at i
**/
/**
Time: O(N)
Spcae: O(1)
 */
var removeDuplicates = function(nums) {
    let i=0,//to iterate array
        j=0;//placeholder for unique elements
    while(i < nums.length){
        if(nums[i] !== nums[j]){
            j++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        i++;
    }
    return j+1;
};