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
    if(!head || !head.next || k === 0){
        return head
    }
    let len = 0,
        node = head,
        lastNode = null;//to connect lastNode to original head
    while(node){
        len++
        lastNode = node
        node = node.next
    }
    k = k % len // If k is >len then shorten it
    if(k === 0){
        return head
    }
    node = head; //to iterate LL
    for(let i=1; i<len-k; i++){
        node = node.next
    }
    //save up newHead and newTail
    let newHead = node.next
    let newTail = node
    //connect last node to original head
    lastNode.next = head
    //disconnect newTail
    newTail.next = null
    //return new head
    return newHead
};