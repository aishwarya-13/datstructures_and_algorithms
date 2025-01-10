/**
 *https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/description/
 */
var averageOfSubtree = function (root) {
  let resultCount = 0;
  const dfs = (node, count, sum) => {
    if (!node) {
      return [0, 0];
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    const leftSubtreeNodes = left[0];
    const leftSubtreeNodeSum = left[1];
    const rightSubtreeNodes = right[0];
    const rightSubtreeNodeSum = right[1];
    const subTreeNodesCount = leftSubtreeNodes + rightSubtreeNodes + 1;
    const subTreeNodeSum = leftSubtreeNodeSum + rightSubtreeNodeSum + node.val;

    const avg = Math.floor(subTreeNodeSum / subTreeNodesCount);

    if (avg === node.val) {
      resultCount += 1;
    }
    return [subTreeNodesCount, subTreeNodeSum];
  };
  dfs(root, 1, root.val);
  return resultCount;
};

/**
    We reach to the bottom of the tree first and go up calculating the sum of nodes and count of nodes
    in the subtree for that node
    Keep two variables [0,0] [sum, count] to calculate the sum of all nodes in a subtree and number of nodes
    in that subtree
  */
var averageOfSubtree = function (root) {
  let result = 0;
  const dfs = (node) => {
    if (!node) {
      return [0, 0]; //[sum, count]
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    //till the point the execution has reached here, the sum of all nodes in the subtree has been calculated
    //for the particular node
    let sum = left[0] + right[0],
      count = left[1] + right[1],
      avg = Math.floor((sum + node.val) / (count + 1));

    if (avg === node.val) {
      result++;
    }
    return [sum + node.val, count + 1];
  };
  dfs(root);
  return result;
};
