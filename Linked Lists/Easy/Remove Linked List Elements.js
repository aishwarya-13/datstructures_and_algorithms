/**
 * https://leetcode.com/problems/remove-linked-list-elements/
 */

/**
Use two pointers
1]If list is empty simply return null.
2]If nodes to be removed are present at the start of the list then simply update the head to it's next.
3]Initialise prev to null and curr to head.
When curr equals to val then link curr's next to prev's next and update curr to point to new prev'next.

Removing the element means we will be creating new linkages
/Mistakes
Do not move prev ahead if new linkage is made (just point the curr to prevs next)
**/
var removeElements = function(head, val) {
    if(!head){
        return head;
    }
    //Remove nodes from start of the list - just update the head
    while(head && head.val === val){
        head = head.next;
    }
    let prev = null,
        curr = head;
    while(curr){
        //when node to be removed is reached, create new links
        if(curr.val === val){
            prev.next = curr.next;
            curr = prev.next;
            continue;
        }
        //move pointers ahead
        prev = curr;
        curr = curr.next;
    }
    return head;
};