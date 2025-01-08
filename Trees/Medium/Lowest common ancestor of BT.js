// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 To be done before interview
 If one node lies in the left subtree and the other in the right subtree, the current root is the LCA.
 If both nodes lie in the same subtree, the LCA will be in that subtree.
  */
/**
If left node is null then p&q are in the right subtree
If right node is null then p&q are in left subtree
If both left and right are present then the node itself is the ancestor

Note: Diagram has been drawn in the notebook. See notebook for visuals */
/**
 To be done before interview
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
