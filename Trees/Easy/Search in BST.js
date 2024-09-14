//https://leetcode.com/problems/search-in-a-binary-search-tree/description/

/**
 Self: Taking advantage of the classic binay search
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
