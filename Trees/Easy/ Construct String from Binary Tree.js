/**
 * https://leetcode.com/problems/construct-string-from-binary-tree/
 */

//Have to do a preorder traversal - Root->Left->Right
var tree2str = function(root) {
    let result = ``;
    const dfs = (root)=>{
        if(!root){
            return;
        }
        result+= `${root.val}`;
        if(!root.left && root.right){
            result+= `()`;
        }
        if(root.left){
            result+=`(`;
            dfs(root.left);
            result+=`)`;
        }
        if(root.right){
            result+=`(`;
            dfs(root.right);
            result+=`)`;
        }
    }
    dfs(root);
    return result;
};