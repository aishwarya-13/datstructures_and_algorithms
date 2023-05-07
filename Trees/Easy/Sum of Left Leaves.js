/**
 * https://leetcode.com/problems/sum-of-left-leaves/
 */

var sumOfLeftLeaves = function(root) {
    if(!root){
        return 0;
    }
    const left = sumOfLeftLeaves(root.left);
    return left + root.val;
};

/**
//Top down
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    const dfs = (root, isLeft)=>{
        if(!root){
            return;
        }
        if(!root.left && !root.right){//check if leaf node
            if(isLeft){//is left leaf node
                sum+= root.val;
            }
        }
        dfs(root.left, true);
        dfs(root.right, false);
    };
    dfs(root, false);
    return sum;
};
 */