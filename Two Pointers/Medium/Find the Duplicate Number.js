/**
 * https://leetcode.com/problems/find-the-duplicate-number/submissions/1629452900/
 */

/**
https://www.youtube.com/watch?v=-KqZ0Miukws

Given in the problem statement is that the array elements lie between 1 to n
So we can use the array elements itself as indices.

[1,3,4,2,2]
 0 1 2 3 4

 At 0th index there is 1
 1->
 At 1st index there is 3
 1->3
 At 3rd index there is 2
 1->3->2
 At 2nd index there is 4
 1->3->2->4
 At 4th index there is 2. We got a cycle
 1->3->2->4
       ^  |
       |__|
How to detect cycle? Use Floyd's algorithm (Detect cycle in linked list)
Use slow and fast pointers.

1]Intialize slow and fast to nums[0]
2]Move slow 1 step ahead and fast 2 steps ahead. Iterate until both are equal
3]Intialize slow to nums[0] and keep fast as is
4]Move both pointers one step ahead.Iterate till both values are equal
5]Return slow

Here we have created a linked list(kind of) structure and we will be iterating that (not the actual array)
The return value is not the actual number. It is the index where cycle occurs(which becomes equal to the duplicate number (array element))

 Time: O(N)
 Space: O(1)
  */
var findDuplicate = function (nums) {
  let slow = nums[0],
    fast = nums[0];
  //Find the intersection of slow and fast pointers
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);
  //Slow down the fast pointer and initialise the slow pointer
  slow = nums[0];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
