/**
 * https://leetcode.com/problems/same-tree/
 */

var isSameTree = function (p, q) {
  const dfs = (treeNode1, treeNode2) => {
    /**
            Why return true here?
            Because: Till the point it reaches null node the false conditions did not occur
            that means it is true 
         */
    if (!treeNode1 && !treeNode2) {
      return true;
    }
    if (
      (!treeNode1 && treeNode2) || //if tree1 has one either left node or right node null
      (treeNode1 && !treeNode2) || //if tree2 has one either left node or right node null
      treeNode1.val !== treeNode2.val
    ) {
      return false;
    }
    return (
      dfs(treeNode1.left, treeNode2.left) &&
      dfs(treeNode1.right, treeNode2.right)
    );
  };
  return dfs(p, q);
};

var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (!p || !q || p.val !== q.val) {
    return false;
  }
  let left = isSameTree(p.left, q.left),
    right = isSameTree(p.right, q.right),
    val = p.val === q.val;
  return left && right && val;
};
