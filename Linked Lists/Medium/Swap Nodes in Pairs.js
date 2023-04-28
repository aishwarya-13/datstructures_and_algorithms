/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 */

 /**
 dummy: -1->1->2->3->4

 1] Dig 1
    -1->1->2->3->4
     ^  ^  ^
     p  n1 n2
    
 2] Dig 2
    
    -1->2->1->3->4
     ^  ^  ^
     p  n2 n1

3]  Dig 3
    
    -1->2->1->3->4
           ^  ^  ^
           p  n1 n2
*/
var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    let dummy = new ListNode(-1);
        dummy.next = head;//link dummy node to head  
    //Dig 1
    let prev = dummy,
        node1 = head, 
        node2 = head.next;
    while(node1 && node2){
        //Swap the nodes: Dig2
        node1.next = node2.next;
        node2.next = node1;
        prev.next = node2;
        //update the pointers: Dig3
        prev = node1;
        node1 = node1.next;
        node2 = node1 ? node1.next : null;
    }
    return dummy.next;
};