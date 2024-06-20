/**
 * https://leetcode.com/problems/merge-two-binary-trees/
 */

/**
    Not using third variable - Self
 */
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
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};

/**
    Optimized "self solution"
    No need to use dfs function
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return null;
  }
  if (!root1) {
    //if root1 is null, then return whole node2(that will include root2's subtree, be it null or has some left and right nodes)
    return root2;
  }
  if (!root2) {
    //if root2 is null, then return whole node1(that will include root1's subtree, be it null or has some left and right nodes)
    return root1;
  }
  const newNode = new TreeNode(root1.val + root2.val);
  newNode.left = mergeTrees(root1.left, root2.left);
  newNode.right = mergeTrees(root1.right, root2.right);
  return newNode;
};

/**
    Optimized "self solution"
    In self solution, I worried about the non-null node when other node was null
    But, I dont have to worry about that -> 
    When one node is null, just return the other node (that will include the node's subtree,
    be it null or has some left or right nodes)
 */
var mergeTrees = function (root1, root2) {
  const dfs = (node1, node2) => {
    if (!node1 && !node2) {
      return null;
    }
    if (!node1) {
      //if node1 is null, then return whole node2(that will include node2's subtree, be it null or has some left and right nodes)
      return node2;
    }
    if (!node2) {
      //if node2 is null, then return whole node1(that will include node1's subtree, be it null or has some left and right nodes)
      return node1;
    }
    const newNode = new TreeNode(node1.val + node2.val);
    newNode.left = dfs(node1.left, node2.left);
    newNode.right = dfs(node1.right, node2.right);
    return newNode;
  };
  return dfs(root1, root2);
};

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
