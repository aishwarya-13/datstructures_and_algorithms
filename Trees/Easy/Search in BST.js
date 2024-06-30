//https://leetcode.com/problems/search-in-a-binary-search-tree/description/

/**
 Self: Taking advantage of BST
 In-order traversing will give a sorted array. So, we will take advantage of Binary search
  */
var searchBST = function (root, val) {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  } else if (root.val > val) {
    return searchBST(root.left, val);
  } else if (root.val < val) {
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
