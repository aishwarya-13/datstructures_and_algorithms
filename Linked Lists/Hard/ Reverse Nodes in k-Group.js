/**
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 */

/**
Use Reverse every k element code from Grokking old course.
Only difference here will be there will be to calculate length first and check if remaining nodes after reversal is >= k.
**/
var reverseKGroup = function(head, k) {
    let len = 0,
        node = head;
    while(node){
        len++;
        node = node.next;
    }
    let prev = null,
        curr = head,
        right = k;
    while(curr && len >= k){
        let newHead = prev,
            newTail = curr;
        while(right > 0 && curr){
            let saveNext = curr.next;
            curr.next = prev;
            prev = curr;
            curr = saveNext;
            right--;
            len--;
        }
        if(newHead === null){
            head = prev;
        }else{
            newHead.next = prev;
        }
        newTail.next = curr;
        prev = newTail;
        right = k;
    }
    return head;
};