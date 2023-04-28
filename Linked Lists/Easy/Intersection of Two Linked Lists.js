/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 */

/**
Without using extra space
	1. In the first iteration, we will reset the pointer of one linkedlist to the head of another linkedlist after it reaches the tail node. 
	2. In the second iteration, we will move two pointers until they points to the same node. 
	3. Our operations in first iteration will help us counteract the difference. 
		So if two linkedlist intersects, the meeting point in second iteration must be the intersection point. 
If the two linked lists have no intersection at all, then the meeting pointer in second iteration must be the tail node of both lists, which is null

Note: Here it does not intersect at 1->8->4->5 because Node 1 in listA has different memory address than Node 1 in listB. Node 8 in both lists has same memory address that is why they intersect at Node 8
**/
var getIntersectionNode = function(headA, headB) {
    if(!headA && !headB){
        return null
    }
    let node1 = headA,
        node2 = headB;
    while(node1 != node2){
        node1 = node1 === null ? headB : node1.next;
        node2 = node2 === null ? headA : node2.next;
    }
    return node1;
};

/**
Solution: https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/49785/java-solution-without-knowing-the-difference-in-len/
 */

/**
Use set to track the nodes in the lists
intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
Here it does not intersect at 1->8->4->5 because Node 1 in listA has different memory address than Node 1 in listB. Node 8 in both lists has same memory address that is why they intersect at Node 8

var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    while(headA){
        set.add(headA);
        headA = headA.next;
    }
    while(headB){
        if(set.has(headB)){
            return headB;
        }
        headB = headB.next;
    }
    return null;
};
 */