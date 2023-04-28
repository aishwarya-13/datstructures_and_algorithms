/**
 * https://leetcode.com/problems/add-two-numbers-ii/
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
        l2 = reverse(list2),
        sum = 0,
        result = null;
     console.log(list1, list2)
     while(l1 || l2){
         if(l1){
             sum+= l1.val;
             l1 = l1.next;
         }
         if(l2){
             sum+= l2.val;
             l2 = l2.next;
         }
         let node = new ListNode(sum % 10, result);
         result = node;
         sum = sum > 9 ? 1 : 0;
     }
     if(sum){
         result = new ListNode(1, result);
     }
     return result;
 };
 
 const reverse = (list)=>{
     let prev = null,
         curr = list;
     while(curr){
         let saveNext = curr.next;
         curr.next = prev;
         prev = curr;
         curr = saveNext;
     }
     return prev;
 }
 
 