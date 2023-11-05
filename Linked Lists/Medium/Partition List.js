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
        greater = new ListNode(-1),
        l = less,//pointer for less LL
        g = greater,//pointer for greater LL
        node = head;//pointer for head
    
    while(node){
        if(node.val < x){
            l.next = node;
            l = l.next
        }else{
            g.next = node;
            g = g.next
        }
        node = node.next
    }
    g.next = null
    l.next = greater.next//merge less and greater LLs
    return less.next
};