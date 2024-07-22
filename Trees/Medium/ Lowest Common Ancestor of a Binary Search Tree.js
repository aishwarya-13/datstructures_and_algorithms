/**
 *https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 */

/**
 Take advantage of BST here
 Start traversing the tree from the root node.
1. If both the nodes p and q are in the right subtree, then continue the search with right subtree starting step 1.
2. If both the nodes p and q are in the left subtree, then continue the search with left subtree starting step 1.
3. If both step 2 and step 3 are not true, this means we have found the node which is common to node p's and q's subtrees.
and hence we return this common node as the LCA.
  */
var lowestCommonAncestor = function (root, p, q) {
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};

/**
 Same solution as: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
  */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) {
    return right;
  }
  if (!right) {
    return left;
  }
  return root;
};
