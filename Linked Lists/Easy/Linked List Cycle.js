/**
 * https://leetcode.com/problems/linked-list-cycle/
 */

/**
Use slow and fast pointers
1]Initialise slow and fast pointers to head
2]Move slow one step ahead and fast two steps ahead
3]When slow and fast become equal there is a cycle in the list
**/
var hasCycle = function(head) {
    if(!head || !head.next){
        return false;
    }
    let slow = head,
        fast = head;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){//found a cycle
            return true;
        }
    }
    return false;//no cycle
};