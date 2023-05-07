/**
 * https://leetcode.com/problems/binary-tree-paths/
 */

//Top down
var binaryTreePaths = function(root) {
    let result = [];
    const dfs = (root, str)=>{
        if(!root){
            return;
        }
        if(!root.left && !root.right){
            str+=`${root.val}`;
            result.push(str);
            return;
        }
        str += `${root.val}->`;
        dfs(root.left, str);
        dfs(root.right, str);
    };
    dfs(root, '');
    return result;
};