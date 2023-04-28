/**
 * https://leetcode.com/problems/palindrome-linked-list/
 */

/**
Time:O(N)
Space:O(1)
Reverse second half of linked list and compare first half and second half
1]Get midpoint of list using slow and fast pointers
2]Reverse the list from middle to end of list
3]Compare first half and second half for palindrome test
**/
var isPalindrome = function(head) {
    //1]Find midpoint of the linked list
    //In case of two middle nodes get the second middle node
    let slow = head,
        fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null,
        curr = slow;
    //2]Reverse the linked list from middle to end
    while(curr){
        let saveNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = saveNext;
    }
    //Place pointer at start of first half and end of second half and compare for plaindrome
    //1->2            //2->1
    //^front          //^back
    let front = head,
        back = prev;
    while(back){
        if(front.val !== back.val){
            return false;
        }
        front = front.next;
        back = back.next;
    }
    return true;
};