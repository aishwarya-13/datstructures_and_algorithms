/**
 * https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
 */

var findSecondMinimumValue = function(root) {
    let min = +Infinity,
        secondMin = +Infinity;
    const dfs = (root)=>{
        if(!root){
            return;
        }
        if(root.val < min){
            secondMin = min;
            min = root.val;
        }else if(root.val > min && root.val < secondMin){
            secondMin = root.val;
        }
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return secondMin === +Infinity ? -1 : secondMin;
};