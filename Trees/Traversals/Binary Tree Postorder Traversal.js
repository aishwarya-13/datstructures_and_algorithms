/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 */

//Post-order = left->right->root
//Recursive
const postorderTraversal = (root)=>{
    if(root === null){
        return [];
    }
    const left = postorderTraversal(root.left);
    const right = postorderTraversal(root.right);
    return [...left ,...right, root.val];
};

/**
var postorderTraversal = function(root) {
    let result = [];
    const dfs = (root)=>{
        if(!root){
            return;
        }
        dfs(root.left);
        dfs(root.right);
        result.push(root.val);
    };
    dfs(root);
    return result;
};
 */

/**
//Iterative
const postOrderTraversal = (root)=>{
    let stack1 = [root],//1] Push root onto first stack
        stack2 = [],
        result = [];
    //2] Loop while the first stack is not not empty
    //a] Pop a node from first stack and push it to second stack
    //b] Push left and right children of the popped node to the first stack
    while(stack1.length > 0){
        let curr = stack1.pop();
        stack2.push(curr);
        if(curr.left){
            stack1.push(curr.left);
        }
        if(curr.right){
            stack1.push(curr.right);
        }
    }
    //3] Loop through the second stack to print contents of second stack
    while(stack2.length > 0){
        result.push(stack2.pop().val);
    }
    return result;
};
 */