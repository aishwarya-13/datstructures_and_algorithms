/**
 * https://leetcode.com/problems/sum-of-left-leaves/
 */

/**
    Self: Top down: Using an external variable
  */
var sumOfLeftLeaves = function (root) {
  let result = 0;
  const dfs = (node, isLeft) => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right && isLeft) {
      result += node.val;
    }
    dfs(node.left, true);
    dfs(node.right, false);
  };
  dfs(root, false);
  return result;
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
