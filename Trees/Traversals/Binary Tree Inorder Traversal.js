/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 */

//Left root right - clockwise
const inorderTraversal = (root)=>{
    let result = [];
    const dfs = (root)=>{
        if(!root){
            return null;
        }
        dfs(root.left);
        result.push(root.val);
        dfs(root.right);
    };
    dfs(root);
    return result;
};

/**
//Left root right
//Recursive - Bottom Up
const inorderTraversal = (root)=>{
    if(root === null){
        return [];
    }
    const left = inorderTraversal(root.left);
    const right = inorderTraversal(root.right);
    return [...left, root.val, ...right];
};
 */



/**
//Left root right
//Iterative
const inorderTraversal = (root)=>{
   let result = [],
       stack = [],
       curr = root;
    while(curr || stack.length > 0){
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }
    return result;
};
 */