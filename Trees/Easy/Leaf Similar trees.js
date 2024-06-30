//https://leetcode.com/problems/leaf-similar-trees/description/

/**
 Brute force
 We cannot traverse both the trees simultaneously because depth of both trees are different
  */
var leafSimilar = function (root1, root2) {
  const root1Leaves = getLeavesLeftToRight(root1);
  console.log("root1Leaves", root1Leaves);
  const root2Leaves = getLeavesLeftToRight(root2);
  console.log("root2Leaves", root2Leaves);
  return root1Leaves === root2Leaves;
};

const getLeavesLeftToRight = (node) => {
  let result = "";
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    dfs(node.right);
    if (!node.left && !node.right) {
      result += `${node.val}->`;
    }
  };
  dfs(node);
  return result;
};
