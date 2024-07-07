/**
 *https://leetcode.com/problems/closest-binary-search-tree-value/description/
 */
/**
 Aishwarya
 Self
  */
var closestValue = function (root, target) {
  let min = +Infinity,
    result = null;
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    console.log(node.val);
    let diff = Math.abs(node.val - target);
    if (diff < min) {
      min = diff;
      result = node.val;
    }
    dfs(node.right);
  };
  dfs(root);
  return result;
};
