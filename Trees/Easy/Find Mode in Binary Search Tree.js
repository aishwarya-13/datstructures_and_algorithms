/**
 * https://leetcode.com/problems/find-mode-in-binary-search-tree/
 */

/**
 * Inorder traversal of a BST will return a sorted array
Using constant space
Because it is a BST, we could treat it as an ascending sorted array when we do inorder traverse.
To achieve constant space, during the traverse we only store current node info (value and count) and compare current node value to previous one:
if equal, we update current value count and maxCount
if not, reset current count to 1.
**/
const findMode = (root)=>{
    let mode = [],
        max = -Infinity,
        count = 0,
        val = null;
    const dfs = (root)=>{
        if(!root){
            return;
        }
        dfs(root.left);
        if(root.val === val){
            count+= 1;
        }else{
            count = 1;
            val = root.val;
        }
        if(count > max){
            mode = [root.val];
            max = count;
        }else if(count === max){
            mode.push(root.val);
        }
        dfs(root.right);
    }
    dfs(root);
    return mode;
};