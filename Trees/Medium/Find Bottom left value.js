//https://leetcode.com/problems/find-bottom-left-tree-value/

/** 
The description is misleading 
Leftmost value does not necessarily mean left child of last row 
We need to find the node value of the last row. Duh! 
*/

var findBottomLeftValue = function (root) {
  let lowestLeftNode = root.val,
    maxLevel = 1;

  const dfs = (node, currentLevel, isLeft, parentNode) => {
    if (!node) {
      return;
    }

    if (currentLevel > maxLevel) {
      maxLevel = currentLevel;

      lowestLeftNode = node.val;
    }

    dfs(node.left, currentLevel + 1);

    dfs(node.right, currentLevel + 1);
  };

  dfs(root, 1);

  return lowestLeftNode;
};
