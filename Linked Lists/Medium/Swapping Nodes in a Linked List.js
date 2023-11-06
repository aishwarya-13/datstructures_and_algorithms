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
        firstnode = null;
    //Move fast k steps ahead
    while(k > 1){
        fast = fast.next
        k--
    }
    firstnode = fast; //this is the firstNode to be swapped
    //Find the nth node from last
    while(fast.next){
        slow = slow.next
        fast = fast.next
    }
    //swap the values
    let temp = slow.val
        slow.val = firstnode.val
        firstnode.val = temp
    return head;
};