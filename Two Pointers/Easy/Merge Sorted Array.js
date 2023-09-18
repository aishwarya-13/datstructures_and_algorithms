/**
 * https://leetcode.com/problems/merge-sorted-array/
 */

/**
Two pointer approach:
Because the two arrays are sorted the idea is to place greater elements between the two arrays at the end of array 1.
Compare the elements at the end of array and place the higher one at the end and move respective pointers.
Iterate the second array
3 pointers
1] At end of nums1 (to place greater elements)
2] At end of non-zero portion in nums1 (to compare greater elements between the two arrays)
3] At end of nums2 array.
**/
/**
Time: O(N+M)
Space: O(1)
[1,2,3,0,0,0]       [2,5,6]
     ^     ^             ^
     i     p             j
 */
     var merge = function(nums1, m, nums2, n) {
        let p1 = m - 1, //pointer at end of non-zero nums1
            p2 = n - 1, //pointer at end of non-zero nums2
            insertPos = m + n - 1 //pointer at the end of nums1
        while(p2>=0){
            if(nums1[p1] >= nums2[p2]){
                nums1[insertPos--] = nums1[p1--]
            }else{
                nums1[insertPos--] = nums2[p2--]
            }
        }
    };