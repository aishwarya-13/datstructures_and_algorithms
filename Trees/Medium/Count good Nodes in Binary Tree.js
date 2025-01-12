/**]
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/
 */

//Self

/**
    IMP: You used array in the previous solution. This is an improvement over previous solution to use a variable

    1. While traversing, maintain a variable to keep track of max value in the current path
    2. Get max from the current path and check if its value is equal to current node
    3. If max node in the path is equal to current node then it is a good node
 */
var goodNodes = function (root) {
  let goodNodesCount = 0;
  const dfs = (node, currentMax) => {
    if (!node) {
      return;
    }
    const currentMaxInPath = Math.max(currentMax, node.val);
    if (currentMaxInPath === node.val) {
      goodNodesCount += 1;
    }
    dfs(node.left, currentMaxInPath); //pass current max to next function call
    dfs(node.right, currentMaxInPath);
  };
  dfs(root, root.val);
  return goodNodesCount;
};

/**
    1. While traversing, maintain an array to push all node values
    2. Get max from the current path and check if its value is equal to current node
    3. If max node in the path is equal to current node then it is a good node
 */
var goodNodes = function (root) {
  let goodNodesCount = 0;
  const dfs = (node, pathNodesArr) => {
    if (!node) {
      return;
    }
    pathNodesArr.push(node.val); //add node in the path array
    const currentMax = Math.max(...pathNodesArr); //get max in curent path
    if (currentMax === node.val) {
      //if max node in the path is equal to current node then it is a good node
      goodNodesCount += 1;
    }
    dfs(node.left, [...pathNodesArr]); //IMP to create a shallow copy else same array reference is passed in all function calls
    dfs(node.right, [...pathNodesArr]);
  };
  dfs(root, []);
  return goodNodesCount;
};
