/**
 * https://leetcode.com/problems/add-two-numbers/
 */

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(-1),
        result = dummy,
        sum = 0,
        carry = 0;
    while(l1 || l2){
        if(l1 && l2){
            sum = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        }else if(!l1 && l2){
            sum = l2.val + carry;
            l2 = l2.next;
        }else if(l1 && !l2){
            sum = l1.val + carry;
            l1 = l1.next;
        }
        carry = Math.floor(sum / 10);
        dummy.next = new ListNode(sum % 10);
        dummy = dummy.next;
    }
    if(carry){
        dummy.next = new ListNode(carry);
    }
    return result.next;
};