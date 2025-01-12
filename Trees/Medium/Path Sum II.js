/**
 * https://leetcode.com/problems/path-sum-ii/description/
 */

var pathSum = function (root, targetSum) {
  const result = [];
  const dfs = (node, sum, nodeArr) => {
    if (!node) {
      return;
    }
    sum -= node.val;
    nodeArr.push(node.val);
    if (!node.left && !node.right && sum === 0) {
      result.push(nodeArr);
    }
    dfs(node.left, sum, [...nodeArr]); //IMP to [...nodeArr] else all recursive calls will share the same array reference
    dfs(node.right, sum, [...nodeArr]);
  };
  dfs(root, targetSum, []);
  return result;
};
