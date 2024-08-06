/**
 *https://leetcode.com/problems/construct-string-from-binary-tree/description/
 */

var tree2str = function (root) {
  let result = "";
  const dfs = (node) => {
    if (!node) {
      return;
    }
    result += node.val;
    if (node.left) {
      result += "(";
      dfs(node.left);
      result += ")";
    }
    if (!node.left && node.right) {
      result += "()";
    }
    if (node.right) {
      result += "(";
      dfs(node.right);
      result += ")";
    }
  };
  dfs(root);
  return result;
};
