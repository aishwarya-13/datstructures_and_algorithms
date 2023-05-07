/**
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 */

//Using Iterative method
//If level is even add to end of queue
//If level is odd add to start of queue
var zigzagLevelOrder = function(root) {
    if(!root){
        return [];
    }
    let result = [],
        queue = [root],
        level = 0;
    while(queue.length > 0){
        let qSize = queue.length,
            temp = [];
        while(qSize > 0){
            let curr = queue.shift();
            if(level % 2 === 0){
                temp.push(curr.val);
            }else{
                temp.unshift(curr.val);
            }
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
            qSize--;
        }
        result.push(temp);
        level++;
    }
    return result;
};