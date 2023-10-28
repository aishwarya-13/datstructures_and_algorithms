/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
Approach II: Reverse LL
1] Reverse both the lists
2] Add numbers
3] ** BUILD result list in reverse
Time:O(N)
Space:O(N)
**/
var addTwoNumbers = function(list1, list2) {
    let l1 = reverse(list1),
        l2 = reverse(list2);
    let sumList = addTwoLists(l1, l2);
    let resultList = reverse(sumList)
    return resultList;
};

const addTwoLists = (l1, l2) =>{
    let dummy = new ListNode(-1),
        result = dummy,
        sum = 0,
        carry = 0;
    while(l1 || l2){
        if(l1 && l2){
            sum = l1.val + l2.val + carry
            l1 = l1.next
            l2 = l2.next
        }else if(l1 && !l2){
            sum = l1.val + carry
            l1 = l1.next
        }else if(!l1 && l2){
            sum = l2.val + carry
            l2 = l2.next
        }
        carry = Math.floor(sum / 10),
        dummy.next = new ListNode(sum % 10)
        dummy = dummy.next
    }
    if(carry){
        dummy.next = new ListNode(carry)
    }
    return result.next
}

const reverse = (list)=>{
    let curr = list,
        prev = null;
    while(curr){
        let saveNext = curr.next;
        curr.next = prev
        prev = curr
        curr = saveNext
    }
    return prev
}

