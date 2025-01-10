/**
 *https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/
 */
/**
    Reverse in-order traversal
Traversing the right subtree before the left subtree during an in-order traversal means we can visit 
 the greater values before the smaller ones. This approach will traverse the tree so that all the nodes 
 are visited in descending order
    Time: O(N)
    Space: O(N)
  */
var bstToGst = function (root) {
  let nodeSum = 0;
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.right);
    nodeSum += node.val; // add sum
    node.val = nodeSum; //replace current node's val with result sum
    dfs(node.left);
  };
  dfs(root);
  return root;
};

/**
    Brute force approach
 */
var bstToGst = function (root) {
  const arr = inorder(root).reverse();
  console.log("arr", arr);
  replaceValues(root, arr);
  return root;
};

const inorder = (node) => {
  if (!node) {
    return [];
  }
  const left = inorder(node.left);
  const right = inorder(node.right);
  return [...left, node.val, ...right];
};

const replaceValues = (node, arr) => {
  console.log("wew", arr);
  if (!node) {
    return;
  }
  replaceValues(node.left, arr);
  replaceValues(node.right, arr);
  let nodeSum = 0;
  for (let ele of arr) {
    if (ele > node.val) {
      nodeSum += ele;
    } else {
      break;
    }
  }
  node.val += nodeSum;
};
