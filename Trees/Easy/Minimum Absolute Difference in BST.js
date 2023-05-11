/**
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 */

const getMinimumDifference = (root)=>{
    let min = +Infinity,
        curr = null;
    const dfs = (root)=>{
        if(!root){
            return;
        }
        dfs(root.left);
        if(curr === null){
            curr = root.val;
        }else{
           let diff = Math.abs(root.val - curr);
           min = Math.min(min, diff);
           curr = root.val;
        }
        dfs(root.right);
    }
    dfs(root);
    return min;
}