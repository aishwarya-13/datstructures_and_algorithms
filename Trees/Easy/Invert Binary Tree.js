/**
 * https://leetcode.com/problems/invert-binary-tree/
 */

var invertTree = function (root) {
  if (!root) {
    return null;
  }
  const temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};

/**
 We need to swap left nodes with right nodes
  */

var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  //swap
  let t = root.left;
  root.left = root.right;
  root.right = t;
  //recursive calls
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

/**
    Self: Without using extra variable
    Why use const leftNode = root.left?
    => Bz when root.left = invertTree(root.right) is executed the root.left's orignal value is lost 
    Ex: in case of node 7 (In example 1) 7's left is replaced with 9 and the original value (6) is lost
 */
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  const leftNode = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(leftNode);
  return root;
};

/**
 Self: Using extra variable
  */
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  const newNode = new TreeNode(root.val);
  newNode.left = invertTree(root.right);
  newNode.right = invertTree(root.left);
  return newNode;
};
