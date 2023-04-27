/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */

 /**
 function(val, next){
     this.val = val || 0;
     this.next = next || null;
 }
  */
/**
Without extra pointers
Time: O(N)
Space: O(1)
**/
var deleteDuplicates = function(head) {
    //if list has one node or is empty
    if(!head || !head.next){
        return head;
    }
    let curr = head;
    while(curr.next){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }
    return head;
};

/**
Without using map
Time: O(N)
Space: O(1)

var deleteDuplicates = function(head) {
    if(!head){
        return null;
    }
    let dummy = new ListNode(-1),
        result = dummy,
        node = head;
    while(node.next){
        if(node.val !== node.next.val){
            dummy.next = node;
            dummy = dummy.next;
        }
        node = node.next;
    }
    dummy.next = node;//set dummy's next to null. In case of [1,1,2,3,3] we need to point dummy to null;
    return result.next;
};
 */