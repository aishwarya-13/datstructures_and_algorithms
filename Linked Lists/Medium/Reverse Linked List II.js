/**
 * https://leetcode.com/problems/reverse-linked-list-ii/
 */

/**
1] Fix the prev and curr pointers to their respective positions so that we could start reversing
2] Save the leftnode and rightnode before reversing to make connections after reversing
3] Reverse the list till right is 0
4] Make leftnode and rightnode connections
    i)Here edge case would be if left === 1 i.e we need to reverse the list from first node. In this case leftnode  will be null (because prev will be null) so after reversal the head will be prev.
**/
var reverseBetween = function(head, left, right) {
    if(!head && !head.next || left === right){
        return head;
    }
    //1]Fix the prev and curr pointers
    /**
        1->2->3->4->5  left = 2, right = 4
        ^  ^
        p  c
     */
    let prev = null,
        curr = head;
    for(let i=1; i<left; i++){
        prev = curr;
        curr = curr.next;
    }
    /**
        leftnode = 1->2->3->4->5
                   ^
        rightnode = 2->3->4->5
                    ^
     */
    let leftNode = prev,
        rightNode = curr;
    //2]Reverse the sublist from left to right
    prev = null;
    for(let i=left; i<=right; i++){
        let saveNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = saveNext;
    }
    /**
        leftNode = 1->2, rightNode = 2
                   ^                 ^
        prev = 4->3->2, curr = 5->null
               ^               ^
     */
   console.log(leftNode, rightNode, prev, curr)
    //3]Connect the reversed sublist back to original list
    /**
        leftNode = 1->4->3->2
                   ^        ^(rightNode)
        rightNode = 2->5->null
                    ^
     */
    if(leftNode === null){//Edge case when left === 1(reverse from first node)
        head = prev;  
    }else{
        leftNode.next = prev;
    }
    rightNode.next = curr;
    return head;
};