/**
 * https://leetcode.com/problems/binary-tree-tilt/
 */

var findTilt = function(root) {
    let tilt = 0;
    const dfs = (root)=>{
        if(!root){
            return 0;
        }
        const leftSum = dfs(root.left);
        const rightSum = dfs(root.right);
        tilt += Math.abs(leftSum - rightSum)
        return leftSum + rightSum + root.val;
    }
    dfs(root);
    return tilt;
};