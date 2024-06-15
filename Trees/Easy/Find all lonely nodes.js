/**
 * https://leetcode.com/problems/find-all-the-lonely-nodes/description/
 */

/**
 Aishwarya
 Top down
  */
var getLonelyNodes = function (root) {
  let result = [];
  const dfs = (node) => {
    if (!node) {
      return;
    }
    if (!node.left && node.right) {
      result.push(node.right.val);
    }
    if (!node.right && node.left) {
      result.push(node.left.val);
    }
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return result;
};
