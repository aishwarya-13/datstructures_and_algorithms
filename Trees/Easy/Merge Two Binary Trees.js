/**
 * https://leetcode.com/problems/merge-two-binary-trees/
 */

//Self -  Using new node
var mergeTrees = function (root1, root2) {
  const dfs = (node1, node2) => {
    if (!node1 && !node2) {
      return null;
    }
    let val = 0;
    if (!node1 && node2) {
      val = node2.val;
    } else if (!node2 && node1) {
      val = node1.val;
    } else {
      val = node1.val + node2.val;
    }
    const newNode = new TreeNode(val);
    newNode.left = dfs(node1 ? node1.left : null, node2 ? node2.left : null);
    newNode.right = dfs(node1 ? node1.right : null, node2 ? node2.right : null);
    return newNode;
  };
  return dfs(root1, root2);
};

var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return null;
  }
  if (!root1) {
    return root2;
  }
  if (!root2) {
    return root1;
  }
  const newNode = new TreeNode(root1.val + root2.val);
  newNode.left = mergeTrees(root1.left, root2.left);
  newNode.right = mergeTrees(root1.right, root2.right);
  return newNode;
};
