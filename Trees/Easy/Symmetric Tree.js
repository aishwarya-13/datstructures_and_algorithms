/**
 * https://leetcode.com/problems/symmetric-tree/
 */

var isSymmetric = function (root) {
  const dfs = (node1, node2) => {
    if (!node1 && !node2) {
      return true;
    }
    if ((!node1 && node2) || (!node2 && node1) || node1.val !== node2.val) {
      return false;
    }
    return dfs(node1.left, node2.right) && dfs(node1.right, node2.left);
  };
  return dfs(root.left, root.right);
};

///Solution 2
var isSymmetric = function (root) {
  return isSameTree(root.left, root.right);
};

//Here we need to compare p'left to q's right and vice-versa
const isSameTree = (p, q) => {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null || p.val !== q.val) {
    return false;
  }
  let left = isSameTree(p.left, q.right),
    right = isSameTree(p.right, q.left);
  return left && right && p.val === q.val;
};
