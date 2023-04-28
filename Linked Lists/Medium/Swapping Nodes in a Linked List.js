/**
 * https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
 */

/**
The problem says swap the values not the nodes. So, we will swap the values
Use slow and fast pointers to locate a node n steps from end
1]Move fast k steps ahead. Fast will point to firstNode to be swapped. Save in a variable
2]Move both slow and fast pointers till fast.next is null. Then slow will point to second node.
3]Swap the values
**/
var swapNodes = function(head, k) {
    let slow = head,
        fast = head,
        firstNode = null,
        prevToFirstNode = null,
        secondNode = null,
        prevToSecondNode = null;
    while(k > 1){
        prevToFirstNode = fast;
        fast = fast.next;
        k--;
    }
    firstNode = fast;
    while(fast.next){
        prevToSecondNode = slow;
        slow = slow.next;
        fast = fast.next;
    }
    let t = firstNode.val;
    firstNode.val = slow.val;
    slow.val = t;
    return head;
};