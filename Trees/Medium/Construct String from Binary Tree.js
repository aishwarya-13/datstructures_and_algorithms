/**
 *https://leetcode.com/problems/construct-string-from-binary-tree/description/
 */

//Use this solution
var tree2str = function (root) {
  if (!root) {
    return "";
  }
  const left = tree2str(root.left);
  const right = tree2str(root.right);

  if (left && right) {
    return `${root.val}(${left})(${right})`;
  } else if (!left && right) {
    return `${root.val}()(${right})`;
  } else if (left && !right) {
    return `${root.val}(${left})`;
  } else if (!left && !right) {
    //if leaf node then return only the node value
    return `${root.val}`;
  }
};

var tree2str = function (root) {
  let result = "";
  const dfs = (node) => {
    if (!node) {
      return;
    }
    result += node.val;
    if (node.left) {
      result += "(";
      dfs(node.left);
      result += ")";
    }
    if (!node.left && node.right) {
      result += "()";
    }
    if (node.right) {
      result += "(";
      dfs(node.right);
      result += ")";
    }
  };
  dfs(root);
  return result;
};
