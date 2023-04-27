/**
 * https://leetcode.com/problems/balanced-binary-tree/
 */

/**
Height balanced tree is a binary tree where EVERY node's left and right subtree height difference is not more than 1

Here we need to find the depth of every node. So create a function to calculate the depth of the tree
**/
var isBalanced = function(root) {
    if(!root){
        return true;
    }
    const left = calHeight(root.left);//calculate the height of left subtree
    const right = calHeight(root.right);//calculate the height of right subtree
    const diff = Math.abs(right - left) <= 1;
     //We have to check the balance for every node that is why
    //isBalanced(root.left) && isBalanced(root.right)
    return diff && isBalanced(root.left) && isBalanced(root.right);

}

//Calculate height of node
const calHeight = (root)=>{
    if(!root){
        return 0;
    }
    const left = calHeight(root.left);
    const right = calHeight(root.right);
    return Math.max(left, right) + 1;
}