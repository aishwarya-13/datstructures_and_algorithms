/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 */

var copyRandomList = function(head) {
    if(!head){
        return null;
    }
    let map = new Map(),
        node = head;
    while(node){
        map.set(node, new Node(node.val, null, null));
        node = node.next;
    }
    node = head;
    while(node){
        map.get(node).next = map.get(node.next) || null;
        map.get(node).random = map.get(node.random) || null;
        node = node.next;
    }
    //Here we are modifying the node in the map itself so we get the result in map.get(head)
    return map.get(head);
};