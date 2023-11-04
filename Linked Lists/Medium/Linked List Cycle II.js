/**
 * https://leetcode.com/problems/linked-list-cycle-ii/
 */

/**
    Approach 2: Using hare and tortoise alogrithm
    Step 1] See if there is cycle in LL
    Step 2] Cycle can be found anywhere in the cycle. We need to find start of the cycle so
        i) Reset fast to head (keep slow as is)
        ii) Move both one step ahead
        iii) When both meet thats the entry to the cycle
**/
var detectCycle = function(head) {
    let slow = findCycle(head),
        fast = head;
    if(slow === null){
        return null
    }
    while(slow !== fast){
        slow = slow.next
        fast = fast.next
    }
    return slow
}

const findCycle = (list)=>{
    let slow = list,
        fast = list;
    while(fast && fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return slow
        }
    }
    return null;
}

/**
    Approach 1: Using set - This solution is in Leetcode's official solution
**/
var detectCycle = function(head) {
    let set = new Set(),
        node = head;
    while(node){
        if(!set.has(node)){
            set.add(node)
        }else{
            return node
        }
        node = node.next
    }
    return null
}