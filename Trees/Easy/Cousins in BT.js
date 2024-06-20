/**
 * https://leetcode.com/problems/cousins-in-binary-tree/description/
 */
/**
 More optimized solution of my solution
 What is optimized? Calculating parent and reduced number of lines
  */
var isCousins = function (root, x, y) {
  const calDepthAndParent = (node, depth, toBeFound, parent) => {
    if (!node) {
      return null;
    }
    if (node.val === toBeFound) {
      return [depth, parent];
    }
    let left = calDepthAndParent(node.left, depth + 1, toBeFound, node);
    let right = calDepthAndParent(node.right, depth + 1, toBeFound, node);
    return left || right;
  };
  const [xDepth, xParent] = calDepthAndParent(root, 0, x);
  const [yDepth, yParent] = calDepthAndParent(root, 0, y);

  return xDepth === yDepth && xParent !== yParent;
};

///////

//Self solved - Brute force
var isCousins = function (root, x, y) {
  const xHeight = calculateHeightAndParent(root, x);
  console.log("xHeight", xHeight[0], "xParent", xHeight[1]);
  const yHeight = calculateHeightAndParent(root, y);
  console.log("yHeight", yHeight[0], "yParent", yHeight[1]);
  return xHeight[0] === yHeight[0] && xHeight[1] !== yHeight[1];
};

const calculateHeightAndParent = (node, toBeFound) => {
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
