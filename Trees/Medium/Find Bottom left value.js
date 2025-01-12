//https://leetcode.com/problems/find-bottom-left-tree-value/

/**
 The description is not fully explanatory
 More explanation: 
 Leftmost node does not mean left child. Leftmost means left side of the tree
 Return the left most node at last row means
 1. If at last row all non null nodes are present at same level, then return the leftmost node
 2. If at last row only right child is present and not left child that means they want that right child to be returned. In this case leftmost node is that right child

Since left side of tree needs to be traversed we will do preorder traversal
Will visit the left subtree first (since leftmost node is asked) then right subtree
  */
var findBottomLeftValue = function (root) {
  let lowestLeftNode = root.val,
    maxLevel = 1;
  const dfs = (node, currentLevel, isLeft, parentNode) => {
    if (!node) {
      return;
    }
    if (currentLevel > maxLevel) {
      //IMP to update the max level only when the current level is greater than max
      maxLevel = currentLevel;
      lowestLeftNode = node.val;
    }
    dfs(node.left, currentLevel + 1); //since leftmost needs to be returned, visit the left subtree first
    dfs(node.right, currentLevel + 1);
  };
  dfs(root, 1);
  return lowestLeftNode;
};
