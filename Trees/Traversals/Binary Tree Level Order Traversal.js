/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

var levelOrder = function(root) {
    if(!root){
        return [];
    }
    let result = [],
        queue = [root];
    while(queue.length > 0){
        let size = queue.length,
            temp = []
        while(size > 0){
            let curr = queue.shift();
            console.log(curr)
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
    return result;
};