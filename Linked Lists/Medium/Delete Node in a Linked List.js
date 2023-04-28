/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 */

/**
We cannot actually delete a node here because the head of the list is not given
So what we will do is
1] Copy the given node's next node's value into the given node
2] Point given node to it's next next
**/
var deleteNode = function(node) {
    node.val = node.next.val;//copy nodes next value in the given node
    node.next = node.next.next;//point nodes next to its next next
};