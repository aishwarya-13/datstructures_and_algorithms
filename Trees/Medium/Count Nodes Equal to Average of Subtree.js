/**
 *https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/description/
 */
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
