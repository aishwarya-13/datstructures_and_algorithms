/**
 * https://leetcode.com/problems/cousins-in-binary-tree/description/
 */

//Self solved - Brute force
var isCousins = function (root, x, y) {
  const xHeight = calculateHeight(root, x);
  console.log("xHeight", xHeight[0], "xParent", xHeight[1]);
  const yHeight = calculateHeight(root, y);
  console.log("yHeight", yHeight[0], "yParent", yHeight[1]);
  return xHeight[0] === yHeight[0] && xHeight[1] !== yHeight[1];
};

const calculateHeight = (node, toBeFound) => {
  let result = [0, null]; //[height, parent]
  let parent = null;
  const dfs = (node, count) => {
    if (!node) {
      return;
    }
    if (node.left && node.left.val === toBeFound) {
      parent = node.val;
    }
    if (node.right && node.right.val === toBeFound) {
      parent = node.val;
    }
    if (node.val === toBeFound) {
      result = [count, parent];
      parent = null;
    }
    dfs(node.left, count + 1);
    dfs(node.right, count + 1);
  };
  dfs(node, 0);
  return result;
};
