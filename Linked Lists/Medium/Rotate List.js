/**
 * https://leetcode.com/problems/rotate-list/
 */

/**
1]Find length of LL and last node
2]Compute k
3]Find new tail and new head
4]Disconnect new tail and assign null
5]Connect last node to original head
6]Return new head

EDGE CASES
i) When k > length of list --->shorten the k by k%len
ii)When k === length of list. In this case the number of rotations will result the original list so return head as is.
**/
var rotateRight = function(head, k) {
    if(!head || !head.next){
        return head;
    }
    //Calculate length and last node
    let len = 1,
        lastNode = head;
    while(lastNode.next){
        lastNode = lastNode.next;
        len++;
    }
    //Compute k (if k is > len then we need to take %)
    k%=len;
    // If k is 0, the list remains the same, so return the head
    if(k === 0){
        return head;
    }
    //Find new tail and head node
    let newTail = head;
    for(let i=1; i<len - k; i++){
        newTail = newTail.next;
    }
    //Find new head
    let newHead = newTail.next;
    //Disconnect newTail
    newTail.next = null;
    //connect last node to original head
    lastNode.next = head;
    return newHead;
};