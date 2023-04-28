/**
 * https://leetcode.com/problems/linked-list-cycle-ii/
 */


/**
Approach 2: Using slow and fast pointers
Phase 1) Find if list is cyclic. Return the circular node
Phase 2) This phase finds the entrance to the cycle.
i) Two pointer. One points head and other the intersection to the cycle
Move both one step ahead
When both become equal we found the intersection
**/
var detectCycle = function(head) {
    //If list is empty OR one node is present
    if(!head || !head.next) {
        return null;
    }
    let p1 = head,
        p2 = getCircularNode(head);
    if(p2 === null){//If there is no cycle in the linked list
        return null;
    }
    while(p1 !== p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
};

const getCircularNode = (list)=>{
    let slow = list,
        fast = list,
        node = null;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return slow;
        }
    }
    return null;
}