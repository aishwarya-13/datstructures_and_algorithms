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
    //1] Get middle of LL
    let slow = head,
        fast = head;
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    console.log('mid', slow)
    //2] Reverse second half
    let prev = null,
        curr = slow
    while(curr){
        let saveNext = curr.next
        curr.next = prev
        prev = curr
        curr = saveNext
    }
    console.log('reverse second half', prev)
    console.log('head', head)
    /**
        mid [2,1]
        reverse second half [1,2]
        head [1,2,2]
     */
    //3]Compare 1st half and 2nd half
    let first = head,
        second = prev;
    while(second){
        if(first.val !== second.val){
            return false
        }
        first = first.next
        second = second.next
    }
    return true
};

