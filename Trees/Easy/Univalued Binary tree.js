//https://leetcode.com/problems/univalued-binary-tree/

/**
 Passing a variable in dfs to keep track of uni value
  */
var isUnivalTree = function (root) {
  const val = root.val;
  const dfs = (node, isUnival) => {
    if (!node) {
      return true;
    }
    isUnival = node.val === val;
    if (isUnival === false) {
      return false;
    }
    return dfs(node.left, isUnival) && dfs(node.right, isUnival);
  };
  return dfs(root, true);
};

/**
 * Using a global variable to keep track of uni value
 */
var isUnivalTree = function (root) {
  let isUnival = null,
    val = root.val;
  const dfs = (node) => {
    if (!node || isUnival === false) {
      //need to return false here because we dont want to proceed if false. So return when false
      return;
    }
    isUnival = node.val === val;
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return isUnival;
};

var isUnivalTree = function (root) {
  const val = root.val;
  const dfs = (node) => {
    /**
          Why return true from here? Because it reached till null that means 
          there was no false condition in the path and we need to return true somewhere
       */
    if (!node) {
      return true;
    }
    if (node.val !== val) {
      return false;
    }
    return dfs(node.left) && dfs(node.right);
  };
  return dfs(root);
};
