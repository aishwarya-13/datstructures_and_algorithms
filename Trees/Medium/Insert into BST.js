/**
 * https://leetcode.com/problems/insert-into-a-binary-search-tree/description/
 */

/**
    Goal is to insert the node as child of leaf node
    If val > current node val then go right else if val is less then go left
  */
var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};
