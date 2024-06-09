/**
 * https://leetcode.com/problems/path-sum/
 */

//Use preorder traversal because process root first then traverse left
//Pre-order is top down approach

/**
    Using addition
    We have to check for either left path or right path, that is why take ||
  */
var hasPathSum = function (root, targetSum) {
  const dfs = (node, sum) => {
    if (!node) {
      return false;
    }
    sum += node.val;
    if (!node.left && !node.right) {
      //reached leaf node
      return sum === targetSum;
    }
    return dfs(node.left, sum) || dfs(node.right, sum);
  };
  return dfs(root, 0);
};

/**
        using subtraction
     */
var hasPathSum = function (root, targetSum) {
  const dfs = (node, sum) => {
    if (!node) {
      return false;
    }
    sum -= node.val;
    if (!node.left && !node.right) {
      //reached leaf node
      return sum === targetSum;
    }
    return dfs(node.left, sum) || dfs(node.right, sum);
  };
  return dfs(root, 0);
};

//Approach 1: Recursive Bottom Up
/**
1] With each recirsive call reduce the sum
2] If a null node is reached return false
3] We have to check the path sum so we will check for a leaf node condition.
4] If leaf node is reached (i.e it's left and right nodes are null) then check if sum is equal to the target.
**/
const hasPathSum = (root, targetSum) => {
  if (root === null) {
    return false;
  }
  targetSum -= root.val;
  if (root.left === null && root.right === null && targetSum == 0) {
    return true;
  }
  const isLeftSum = hasPathSum(root.left, targetSum);
  const isRightSum = hasPathSum(root.right, targetSum);
  return isLeftSum || isRightSum;
};
