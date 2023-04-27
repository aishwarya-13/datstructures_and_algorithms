/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 */

 /**
 const maxDepth = (root)=>{
    if(!root){
        return 0;
    }
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    const max = Math.max(left, right);
    return max + 1;
};
This code will not work here 
Test case: [2,null,3,null,4,null,5,null,6]
  */

var minDepth = function(root) {
    if(!root){
        return 0;
    }else if(!root.left){
        return minDepth(root.right) + 1;
    }else if(!root.right){
        return minDepth(root.left) + 1;
    }else{
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
};