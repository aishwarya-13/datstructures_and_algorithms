/**
 * https://leetcode.com/problems/subtree-of-another-tree/
 */

/**
 Self: When root's val becomes equal to subRoot's val then check if both 
 of the nodes (node at val equal to subroot and subroot) is same tree
  */
var isSubtree = function (root, subRoot) {
  if (!root) {
    return false;
  }
  /**
   * My mistake: i did return isSameTree(root, subRoot).
   * Due to which it didnt check for any node equal to subroot's node after its first encounter
   * What if same node val is present further down in the tree?
   * Thats why only return true when isSameTree(root, subRoot) has returned true
   * Consider the case:root = [1,1] and subRoot = [1]
   * In this case, it wont check for the seconde node "1". It will return false from first node "1"
   */
  if (root.val === subRoot.val) {
    if (isSameTree(root, subRoot)) {
      return true;
    }
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = (root1, root2) => {
  if (!root1 && !root2) {
    return true;
  }
  if ((!root1 && root2) || (!root2 && root1) || root1.val !== root2.val) {
    return false;
  }
  return (
    isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
  );
};
