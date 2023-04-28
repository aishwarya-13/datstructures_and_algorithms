/**
 * https://leetcode.com/problems/reverse-linked-list/
 */

/**
Use two pointers prev and curr.
1]Initialise prev to null and curr to head
2]Save curr's next in a variable
3]Point curr's next to prev
4]Move prev ahead(how? equal it to curr)
5]Move curr ahead(how? equal it to saveNext)
**/
var reverseList = function(head) {
    if(!head || !head.next){
        return head;
    }
    let prev = null,
        curr = head;
    while(curr){
        let saveNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = saveNext;
    }
    return prev;
};