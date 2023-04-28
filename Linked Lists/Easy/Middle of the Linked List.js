/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 */

 /**
 1] move slow one step ahead
 2] move fast two steps ahead
 3] When fast reaches end slow will point to the middle node
  */
 var middleNode = function(head) {
    let slow = head,
        fast = head;
    while(fast && fast.next){
        slow = slow.next;//move slow one step ahead
        fast = fast.next.next;//move fast two steps ahead
    }
    return slow;
};

/**
If there are two middle nodes and we need to return first middle node then iterate till fast.next.next
If there are two middle nodes and we need to return second middle node then iterate till fast.next
**/