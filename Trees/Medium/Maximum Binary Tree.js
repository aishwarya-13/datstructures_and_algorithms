/**
 * https://leetcode.com/problems/maximum-binary-tree/description/
 */

/**
 Break case: When array length is 0
 Create a separate function to get max and max's index
 slice the left and right array based on the index
 create node with max value and left subtree with left array and right subtree with right array
  */
var constructMaximumBinaryTree = function (nums) {
  const dfs = (arr) => {
    if (!arr.length) {
      return null;
    }
    const [max, maxIndex] = getMax(arr);
    const leftNums = arr.slice(0, maxIndex);
    const rightNums = arr.slice(maxIndex + 1, nums.length);
    console.log(
      "max",
      max,
      "maxIndex",
      maxIndex,
      "leftNums",
      leftNums,
      "rightNums",
      rightNums
    );
    let node = new TreeNode(max);
    node.left = dfs(leftNums);
    node.right = dfs(rightNums);
    return node;
  };
  return dfs(nums);
};

const getMax = (nums) => {
  let max = nums[0],
    maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }
  return [max, maxIndex];
};
