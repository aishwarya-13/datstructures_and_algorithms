/**
 * https://leetcode.com/problems/path-sum/
 */

var hasPathSum = function (root, targetSum) {
  const dfs = (node, nodeSum) => {
    if (!node) {
      return false;
    }
    nodeSum -= node.val; //subtracting at this line is necessary not at line 17
    if (!node.left && !node.right) {
      return nodeSum === 0;
    }
    //subtracting at this line 17 dfs(node.left, nodeSum - node.val) will not work because when it reaches leaf node,
    //the leaf node val - nodeSum wont be done until line 17
    //So, there will be return at line 12 without calculating  leaf node val - nodeSum
    return dfs(node.left, nodeSum) || dfs(node.right, nodeSum);
  };
  return dfs(root, targetSum);
};

//Use preorder traversal because process root first then traverse left

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
  Using subtraction
  We have to check for either left path or right path, that is why take ||
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
