/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

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