/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 */

/**
Two pointers
1]Point prev to null and curr to head
2]Move both the pointers ahead when curr's current node and next node val are not equal
2]When curr's current node and next node val are equal move only curr ahead till not equal and then point prev's next to curr's next.
3]Edge case when first nodes are duplicates - In this case prev will be null and reassign head to curr'next
**/
var deleteDuplicates = function(head) {
    let prev = null,
        curr = head;
    while(curr){
        if(curr.next && curr.val === curr.next.val){
           while(curr.next && curr.val === curr.next.val){
                curr = curr.next;
            }
            if(prev !== null){
                prev.next = curr.next;
            }else{
                head = curr.next;
            }
        }else{
            prev = curr;
        }
        curr = curr.next;
    }
    return head;
};