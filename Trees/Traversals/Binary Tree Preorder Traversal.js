/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 */

//Preorder is: Root->Left->Right

//Recursive
const preorderTraversal = (root)=>{
    if(root === null){
        return [];
    }
    const left = preorderTraversal(root.left);
    const right = preorderTraversal(root.right);
    return [root.val, ...left ,...right];
};

/**
//Recursive
var preorderTraversal = function(root) {
    let result = [];
    const dfs = (root)=>{
        if(!root){
            return;
        }
        result.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return result;
};
 */

/**
const preorderTraversal = (root)=>{
    if(!root){
        return [];
    }
    let stack = [root],
        result = [];
    while(stack.length > 0){
        let curr = stack.pop();
        result.push(curr.val);
        if(curr.right){
            stack.push(curr.right);
        }
        if(curr.left){
            stack.push(curr.left);
        }
    }
    return result;
};
 */