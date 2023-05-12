/**
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
 */

//We have to do level order traversal
var averageOfLevels = function(root) {
    let queue = [root],
        result = [];
    while(queue.length > 0){
        let qSize = queue.length,
            num = qSize,//will give the number of nodes on the current level
            sum = 0;
        while(qSize > 0){
            let curr = queue.shift();
            sum+= curr.val;
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
            qSize--;
        }
        result.push(sum / num);
    }
    return result;
};