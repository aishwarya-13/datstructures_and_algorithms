/**
 * https://leetcode.com/problems/remove-element/
 */

/**
    1] Use slow and fast pointers
    2] Move fast pointer ahead when its value is equal to val to be removed
    3] When fast pointer val is different from val to be removed then
        a] Update slow pointer val with fast pointer
        b] Move slow ahead
    4] Iterate until fast reaches the end of the array

    Time: O(N)
    Space: O(1)
 */

    var removeElement = function(nums, val) {
        let fast = 0,
            slow = 0;
        while(fast < nums.length){
            if(nums[fast] !== val){
                nums[slow] = nums[fast]
                slow++
            }
            fast++;
        }
        return slow;
    };