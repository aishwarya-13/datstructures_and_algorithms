//https://leetcode.com/problems/univalued-binary-tree/

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
