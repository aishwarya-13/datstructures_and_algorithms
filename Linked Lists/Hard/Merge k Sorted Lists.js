/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 */

/**
Use Merge Two sorted lists algo
Time: O(kN) where k is number of linked lists
Space: O(1)
**/
var mergeKLists = function(lists) {
    let arrLen = lists.length;
    if(arrLen === 0 || (arrLen === 1 && lists[0] === null)){
        return null;
    }
    let i = 0;
        list1 = null,
        list2 = null;
    while(i < arrLen){
        if(i === 0){
            list1 = lists[i],
            list2 = lists[i+1];
        }else{
            list2 = lists[i];
        }
        list1 = mergeTwoLists(list1, list2);
        i = i === 0 ? i+2 : i+1;
    }
    return list1;
};

const mergeTwoLists = (list1, list2)=>{
    let dummy = new ListNode(-1),
        result = dummy;
    while(list1 && list2){
        if(list1.val < list2.val){
            dummy.next = list1;
            list1 = list1.next;
        }else{
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next;
    }
    if(list1 === null){
        dummy.next = list2;
    }else{
        dummy.next = list1;
    }
    return result.next;
}