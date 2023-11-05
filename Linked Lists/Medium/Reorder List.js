/**
 * https://leetcode.com/problems/reorder-list/
 */

/**
 * This problem is a combination of 3 problems
 * 1]Middle of linked list
 * 2]Reverse linked list
 * 3]Merge two sorted list
 */

var reorderList = function(head) {
    //1]Get middle of LL - -> For even LL get second middle node
    let slow = head,
        fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    //2]Reverse second half of LL
    let prev = null,
        curr = slow;
    while(curr){
        let saveNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = saveNext;
    }
    //Merge two LL
    let first = head,
        second = prev;
    while(second.next){
        let temp = first.next;
        first.next = second;
        first = temp;

        temp = second.next;
        second.next = first;
        second = temp;
    }
    return head;
};