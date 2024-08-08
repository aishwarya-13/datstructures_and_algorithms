/**
 *https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/
 */
/**
    Reverse in-order traversal
Traversing the right subtree before the left subtree during an in-order traversal means we can visit 
 the greater values before the smaller ones. This approach will traverse the tree so that all the nodes 
 are visited in descending order
    Time: O(N)
    Space: O(N)
  */
var bstToGst = function (root) {
  let nodeSum = 0;
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.right);
    nodeSum += node.val;
    node.val = nodeSum;
    dfs(node.left);
  };
  dfs(root);
  return root;
};
