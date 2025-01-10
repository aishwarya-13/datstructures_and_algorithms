/**
 * https://leetcode.com/problems/balance-a-binary-search-tree/description/
 */

/**
 Approach:
 1. Inorder traversl will give a sorted list. So, store the tree nodes in sorted order in an array
 Since they are sorted, we know that for any element, all elements to its left belong to left subtree and all
 elements to its right belong to right subtree
 2. Traverse the array of nodes -> pick the middle element of the array as its root (picking middle element
 ensures the number of elements in the left and right subtress difeers by at most one)

 Time: O(N)
 Space: O(N)
  */
var balanceBST = function (root) {
  const inorderArr = inorder(root);
  return buildTree(inorderArr, 0, inorderArr.length - 1);
};

const inorder = (node) => {
  if (!node) {
    return [];
  }
  const left = inorder(node.left);
  const right = inorder(node.right);
  //here instead of returning node's value return node itself
  //so that there is no need to create a new node when building the tree
  //we modify the exisiting tree itself
  return [...left, node, ...right];
};

const buildTree = (inorderArr, left, right) => {
  if (left > right) {
    return null;
  }
  let mid = left + Math.floor((right - left) / 2);
  const node = inorderArr[mid];
  node.left = buildTree(inorderArr, left, mid - 1);
  node.right = buildTree(inorderArr, mid + 1, right);
  return node;
};
