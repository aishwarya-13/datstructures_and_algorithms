/**
 * https://leetcode.com/problems/merge-two-binary-trees/
 */

var mergeTrees = function(root1, root2) {
    if(!root1 && !root2){
        return null;
    }
    if(!root1){
        return root2;
    }
    if(!root2){
        return root1;
    }
    const newNode = new TreeNode(root1.val + root2.val);
    newNode.left = mergeTrees(root1.left, root2.left);
    newNode.right = mergeTrees(root1.right, root2.right);
    return newNode;
};