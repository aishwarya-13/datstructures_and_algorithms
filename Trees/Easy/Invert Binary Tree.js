/**
 * https://leetcode.com/problems/invert-binary-tree/
 */

 /**
 We need to swap left nodes with right nodes
  */

 var invertTree = function(root) {
    if(root === null){
        return null;
    }
    //swap
    let t = root.left;
    root.left = root.right;
    root.right = t;
    //recursive calls
    invertTree(root.left);
    invertTree(root.right);
    return root;
};