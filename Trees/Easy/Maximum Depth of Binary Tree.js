/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

/**
 * Top down
 */
var maxDepth = function (root) {
  let max = 0;
  const dfs = (node, count) => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      if (count > max) {
        max = count;
      }
    }
    dfs(node.left, count + 1);
    dfs(node.right, count + 1);
  };
  dfs(root, 1);
  return max;
};

//Approach 1 -Recursive Bottom Up
const maxDepth = (root) => {
  if (!root) {
    return 0;
  }
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};
