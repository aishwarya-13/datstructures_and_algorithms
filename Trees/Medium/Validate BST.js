//https://leetcode.com/problems/validate-binary-search-tree/description/

/**
    Self
  */
var isValidBST = function (root) {
  let prev = null,
    result = true;
  const inorder = (node) => {
    if (!node) {
      return;
    }
    inorder(node.left);
    if (prev != null && prev >= node.val) {
      result = false;
      return;
    }
    prev = node.val;
    inorder(node.right);
  };
  inorder(root);
  return result;
};

/**
 Self - improved: Without using extra variable
 In-order traversal gives a sorted array
 So check prev and curr values
 If prev val is greater or equal to curr val then it is not a BST
  */
var isValidBST = function (root) {
  let prev = -Infinity;
  const dfs = (node) => {
    if (!node) {
      return true;
    }
    const left = dfs(node.left);
    console.log("prev", prev);
    console.log("curr", node.val);
    if (prev >= node.val) {
      return false;
    }
    prev = node.val;
    const right = dfs(node.right);
    return left && right;
  };
  return dfs(root);
};

/**
 Self
 In-order traversal gives a sorted array
 So check prev and curr values
 If prev val is greater or equal to curr val then it is not a BST
  */
var isValidBST = function (root) {
  let prev = -Infinity;
  let result = true;
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    console.log("prev", prev);
    console.log("curr", node.val);
    if (prev >= node.val) {
      result = false;
      return result;
    }
    prev = node.val;
    dfs(node.right);
  };
  dfs(root);
  return result;
};
