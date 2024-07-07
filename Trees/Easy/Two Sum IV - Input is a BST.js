/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 */

//Use the same logic as array two sum (Using map)
var findTarget = function (root, k) {
  let map = {};
  const dfs = (root) => {
    if (!root) {
      return false;
    }
    if (map[root.val] !== undefined) {
      return true;
    }
    map[k - root.val] = k - root.val;
    return dfs(root.left) || dfs(root.right);
  };
  return dfs(root);
};

/**
 Using map just like Two Sum of array
  */
var findTarget = function (root, k) {
  let map = {};
  const dfs = (node) => {
    if (!node) {
      return false;
    }
    let diff = k - node.val;
    if (map[diff] === undefined) {
      map[node.val] = diff;
    } else {
      if (diff + node.val === k) {
        return true;
      }
    }
    return dfs(node.left) || dfs(node.right);
  };
  return dfs(root);
};
