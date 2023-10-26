/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
function ListNode(val, next){
    this.val = val || 0;
    this.next = next || null;
}
 */

/**
1]Create a dummy pointer that will iterate the result list
2]Iterate list1 and list2
3]Attch the node with lesser value to dummy and move that pointer ahead
4]At end of iteration, append the remaining list.

Time: O(N+M)
Space: O(1) it allocates a few pointers so has constant overall space
**/
function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1),
        result = dummy;
    while(list1 && list2){
        if(list1.val < list2.val){
            dummy.next = list1;
            list1 = list1.next
        }else{
            dummy.next = list2;
            list2 = list2.next
        }
        dummy = dummy.next
    }
    if(list1 === null){
        dummy.next = list2
    }else{
        dummy.next = list1
    }
    return result.next
}

/**
function ListNode(val, next){
    this.val = val || 0;
    this.next = next || null;
}
 */

/**
Using Recursion

Time: O(N+M)
Space: O(1) it allocates a few pointers so has constant overall space
**/
function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}