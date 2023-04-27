/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

//Approach 1 -Recursive Bottom Up
const maxDepth = (root)=>{
    if(!root){
        return 0;
    }
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};   
