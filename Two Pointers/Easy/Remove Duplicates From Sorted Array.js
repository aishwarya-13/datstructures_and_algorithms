/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
    Use two pointers slow and fast
    Move fast pointer ahead until its value is same as slow pointers
    When value at fast pointer number changed
    1]move slow ahead
    2]update slow with fast pointers value
    Iterate till fast pointer reaches the end of the array

    Time: O(N)
    Space:O(1)
 */
    var removeDuplicates = function(nums) {
        let slow=0,
            fast=0;
        while(fast < nums.length){
            if(nums[slow] !== nums[fast]){
                slow++;
                nums[slow] = nums[fast]
            }
            fast++
        }
        return slow + 1;
    };