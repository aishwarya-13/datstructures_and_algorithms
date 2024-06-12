/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 */

/**
 const maxDepth = (root)=>{
    if(!root){
        return 0;
    }
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    const max = Math.max(left, right);
    return max + 1;
};
This code will not work here 
Test case: [2,null,3,null,4,null,5,null,6]
  */

//if left not present then return right node

var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  let min = +Infinity;
  const dfs = (node, count) => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      if (count < min) {
        min = count;
      }
    }
    dfs(node.left, count + 1);
    dfs(node.right, count + 1);
  };
  dfs(root, 1);
  return min;
};
