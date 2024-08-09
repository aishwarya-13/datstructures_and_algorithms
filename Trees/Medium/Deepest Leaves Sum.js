/**
 *https://leetcode.com/problems/deepest-leaves-sum/description/
 */

/**
 We need to find deepest leaves i.e those which are present at lowest level
 This problem can be broken into of two problems
 1. Max depth of BT
 2. Finding sum of leaves

 -> Keep track of max depth when any leaf node is encountered
 -> Miantain a map of depth and sum of nodes at that depth
 -> From the map return the value at maxDepth
  */
var deepestLeavesSum = function (root) {
  let maxDepth = 0,
    map = {};
  const dfs = (node, depth) => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      //leaf node
      maxDepth = Math.max(maxDepth, depth); //record max depth
      if (map[depth] !== undefined) {
        map[depth] += node.val; //record sum at the depth
      } else {
        map[depth] = node.val;
      }
    }
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };
  dfs(root, 1);
  return map[maxDepth];
};
