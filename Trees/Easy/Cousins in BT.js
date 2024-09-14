/**
 * https://leetcode.com/problems/cousins-in-binary-tree/description/
 */

/**
    Using map and single iteration
    1. Use map to store values
    2. When traversing, if x node is found, then check if map has y value.
        If yes, then check if x and y are cousins
        If no, then store x value in map
    3. When traversing, if y node is found, then check if map has x value.
        If yes, then check if x and y are cousins
        If no, then store y value in map
    4. Why OR condition, because cousins can be found either on left subtree somewhere or right subtree
  */
var isCousins = function (root, x, y) {
  let map = {};
  const dfs = (node, depth, parent) => {
    if (!node) {
      return false;
    }
    if (node.val === x) {
      if (map[y] !== undefined) {
        const [yDepth, yParent] = map[y];
        return yDepth === depth && yParent !== parent;
      }
      map[x] = [depth, parent];
    }
    if (node.val === y) {
      if (map[y] !== undefined) {
        const [xDepth, xParent] = map[x];
        return xDepth === depth && xParent !== parent;
      }
      map[y] = [depth, parent];
    }
    return dfs(node.left, depth + 1, node) || dfs(node.right, depth + 1, node);
  };
  return dfs(root, 0, null);
};

/**
    One iteration - Using map
  */
var isCousins = function (root, x, y) {
  let map = {};
  const calHeightAndDepth = (node, depth, parent) => {
    if (!node) {
      return false;
    }
    if (node.val === x) {
      map[x] = [depth, parent];
      if (map[y] !== undefined) {
        //If y params are calculated before then see if x and y are cousins
        let yDepth = map[y][0],
          yParent = map[y][1];
        return depth === yDepth && parent !== yParent;
      }
    }
    if (node.val === y) {
      map[y] = [depth, parent];
      if (map[x] !== undefined) {
        //If x params are calculated before then see if x and y are cousins
        let xDepth = map[x][0],
          xParent = map[x][1];
        return depth === xDepth && parent !== xParent;
      }
    }
    const left = calHeightAndDepth(node.left, depth + 1, node);
    const right = calHeightAndDepth(node.right, depth + 1, node);
    return left || right;
  };
  return calHeightAndDepth(root, 0);
};

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

//Self - Brute force
var isCousins = function (root, x, y) {
  const xParams = calculateHeightAndParent(root, x);
  console.log("xParams", xParams);
  const yParams = calculateHeightAndParent(root, y);
  console.log("yParams", yParams);
  return xParams[0] === yParams[0] && xParams[1] !== yParams[1];
};

const calculateHeightAndParent = (node, toBeFound) => {
  let result = [0, null]; //[height, parent]
  const dfs = (node, height) => {
    if (!node) {
      return;
    }
    if (node && node.left && node.left.val === toBeFound) {
      result = [height + 1, node];
      return;
    }
    if (node && node.right && node.right.val === toBeFound) {
      result = [height + 1, node];
      return;
    }
    dfs(node.left, height + 1);
    dfs(node.right, height + 1);
  };
  dfs(node, 0);
  return result;
};
