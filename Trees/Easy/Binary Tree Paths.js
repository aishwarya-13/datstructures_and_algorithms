/**
 * https://leetcode.com/problems/binary-tree-paths/
 */

//Using pre-order
var binaryTreePaths = function (root) {
  const result = [];
  const dfs = (node, str) => {
    if (!node) {
      return str;
    }
    str = str ? `${str}->${node.val}` : `${node.val}`;
    if (!node.left && !node.right) {
      result.push(str);
    }
    dfs(node.left, str);
    dfs(node.right, str);
  };
  dfs(root, "");
  return result;
};
