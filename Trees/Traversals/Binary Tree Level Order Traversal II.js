/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 */

var levelOrderBottom = function(root) {
    if(!root){
        return;
    }
    let queue = [root],
        result = [];
    while(queue.length > 0){
        let temp = [],
            size = queue.length;
        while(size > 0){
            let curr = queue.shift();
            temp.push(curr.val);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
            size--;
        }
        result.push(temp);
    }
    return result.reverse();
};