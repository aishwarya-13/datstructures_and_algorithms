/**
 * https://leetcode.com/problems/partition-list/
 */


/**
Using two pointers:
Just copy the nodes into their respective pointers. No need to create new nodes
1] One pointer will track less value other will track greater than equal value
2] Initialise both the pointers to a new node
3] Another pointer we can use to iterate the linked list
4] Copy less value node to first pointer and greater value node to second pointer
5]Move the pointers ahead
**/
var partition = function(head, x) {
    let less = new ListNode(-1),
        p1 = less,
        greater = new ListNode(-1),
        p2 = greater,
        node = head;
    while(node){
        if(node.val < x){
            p1.next = node;
            p1 = p1.next;
        }else{
            p2.next = node;
            p2 = p2.next;
        }
        node = node.next;
    }
    p1.next = greater.next;
    p2.next = null;
    return less.next;
};