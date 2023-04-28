/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 */


/**
This solution uses two pointers to traverse the linked list. 
1]The fast pointer starts n nodes ahead of the slow pointer. 
2]Then, both pointers move forward together until the fast pointer reaches the end of the list. 
3]At that point, the slow pointer is pointing to the node that needs to be removed, so we simply remove it by updating the next pointer of the previous node to skip over the node that's being removed. 
Finally, we return the head of the modified linked list.
 */
var removeNthFromEnd = function(head, n) {
    let slow = head,
        fast = head;
    // Move the fast pointer n nodes ahead of the slow pointer
    for(let i=0; i<n; i++){
        fast = fast.next;
    }
    // If the fast pointer reaches the end, the first node must be removed
    if(fast === null){
        return head.next;
    }
    // Move both pointers until the fast pointer reaches the end then slow will point to the nth node
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    // Remove the nth node from the end
    slow.next = slow.next.next;
    return head;
};