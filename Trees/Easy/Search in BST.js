//https://leetcode.com/problems/search-in-a-binary-search-tree/description/

/**
 * Consider Ex: [4,2,7,1,3] val = 2
 */
var searchBST = function (root, val) {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  } else if (val < root.val) {
    /**
     * When control returns from line "return root", it returns the node.
     * So we need a return statement here. Else, undefined will be returned as an answer
     */
    const node = searchBST(root.left, val);
    return node;
  } else {
    return searchBST(root.right, val);
  }
};

/**
 Self: Taking advantage of the classic binary search
 If val < node.val then go left
 If val > node.val then go right
 If val === node.val we got the answer
  */
var searchBST = function (root, val) {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  } else if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};

/**
 Self: Without taking advantage of BST
  */
var searchBST = function (root, val) {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  return searchBST(root.left, val) || searchBST(root.right, val);
};
