/**
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 */

/**
 Since this is a BST, in-order traversal will give the values is sorted order
 we need prev and current value to take difference.
  */
var getMinimumDifference = function (root) {
  let min = +Infinity,
    prev = +Infinity;
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    let diff = Math.abs(node.val - prev);
    prev = node.val;
    min = Math.min(min, diff);
    dfs(node.right);
  };
  dfs(root);
  return min;
};

const getMinimumDifference = (root) => {
  let min = +Infinity,
    curr = null;
  const dfs = (root) => {
    if (!root) {
      return;
    }
    dfs(root.left);
    if (curr === null) {
      curr = root.val;
    } else {
      let diff = Math.abs(root.val - curr);
      min = Math.min(min, diff);
      curr = root.val;
    }
    dfs(root.right);
  };
  dfs(root);
  return min;
};
