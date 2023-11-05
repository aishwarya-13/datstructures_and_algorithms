/**
 * https://leetcode.com/problems/odd-even-linked-list/
 */


//Better solution using pointer manipulation
/**
Initialise odd = head and even = head.next
even's next will point to odd node. 
odd's next will point to even node.
**/
var oddEvenList = function(head) {
    if(!head || !head.next){
        return head
    }
    let odd = head,
        even = head.next,
        evenHead = head.next;//save start of even LL to make connection to odd LL
    while(even && even.next){
        odd.next = even.next;
        even.next= even.next.next
        //move pointers ahead
        even = even.next
        odd = odd.next
    }
    odd.next = evenHead;//connect odd LL to even LL
    return head
};

/**
var oddEvenList = function(head) {
    let e = new ListNode(-1),
        even = e,
        o = new ListNode(-1),
        odd = o,
        count = 1,
        node = head;
    while(node){
        if(count % 2 === 0){
            e.next = node;
            e = e.next;
        }else{
            o.next = node;
            o = o.next;
        }
        node = node.next;
        count++;
    }
    e.next = null;
    o.next = even.next;
    return odd.next;
};
 */