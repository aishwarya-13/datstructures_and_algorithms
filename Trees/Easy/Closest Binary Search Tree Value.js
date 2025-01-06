/**
 *https://leetcode.com/problems/closest-binary-search-tree-value/description/
 */

/**
 * Taking advantage of Binary search
 */
var closestValue = function (root, target) {
  let min = +Infinity,
    result = +Infinity;
  const dfs = (node) => {
    if (!node) {
      return;
    }
    let diff = Math.abs(node.val - target);
    if (diff < min) {
      min = diff;
      result = node.val;
    }
    if (diff === min) {
      //if diff is same as previous min then get the closest node
      result = Math.min(result, node.val);
    }
    if (target >= node.val) {
      dfs(node.right);
    }
    if (target <= node.val) {
      dfs(node.left);
    }
  };
  dfs(root);
  return result;
};

/**
 Aishwarya
 Self
 Without taking advantage of binary search
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
