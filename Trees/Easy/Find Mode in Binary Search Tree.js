/**
 * https://leetcode.com/problems/find-mode-in-binary-search-tree/
 */

/**
 * Inorder traversal of a BST will return a sorted array
Using constant space
Because it is a BST, we could treat it as an ascending sorted array when we do inorder traverse.
To achieve constant space, during the traverse we only store current node info (value and count) and compare current node value to previous one:
if equal, we update current value count and maxCount
if not, reset current count to 1.
**/
var findMode = function (root) {
  let count = 0,
    max = -Infinity,
    result = [],
    prev = null;
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    if (node.val === prev) {
      count += 1;
    } else {
      prev = node.val; //store prev value
      count = 1; //reset first occurrence
    }
    if (count > max) {
      //found first mode
      result = [node.val];
      max = count;
    } else if (count === max) {
      //found another mode
      result.push(node.val);
    }
    dfs(node.right);
  };
  dfs(root);
  return result;
};

/**
 Using space
  */
var findModee = function (root) {
  let map = {}, //to track frequencies of occurrence of elements
    max = 0; //to track max of freq of occurrennce of elements
  let result = [];
  const dfs = (node) => {
    if (!node) {
      return;
    }
    if (map[node.val] === undefined) {
      map[node.val] = 0;
    }
    map[node.val]++;
    max = Math.max(max, map[node.val]);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  for (let i in map) {
    if (map[i] === max) {
      result.push(i);
    }
  }
  return result;
};
