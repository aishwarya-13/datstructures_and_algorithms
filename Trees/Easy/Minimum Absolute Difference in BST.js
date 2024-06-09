/**
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 */

var minDiffInBST = function (root) {
  let result = Infinity;
  let prev = Infinity;
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    console.log("node", node.val, "prev", prev);
    let diff = Math.abs(prev - node.val);
    if (diff < result) {
      result = diff;
    }
    prev = node.val;
    dfs(node.right);
  };
  dfs(root);
  return result;
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
