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
  const sortedTreeNodes = inorderTraversal(root);
  console.log("sortedTreeNodes", sortedTreeNodes);
  return buildTree(sortedTreeNodes, 0, sortedTreeNodes.length - 1);
};

const inorderTraversal = (root) => {
  if (!root) {
    return [];
  }
  const left = inorderTraversal(root.left);
  const right = inorderTraversal(root.right);
  return [...left, root, ...right];
};
