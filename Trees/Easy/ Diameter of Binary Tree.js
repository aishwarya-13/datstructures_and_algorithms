/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
 */

/**
 While calculating the depth of tree also keep track of diameter (left tree length + right tree length)
 Use a global variable to keep track of diameter and bottom up to calculate depth of tree
  */
var diameterOfBinaryTree = function (root) {
  let len = 0;
  const dfs = (root) => {
    if (!root) {
      return 0;
    }
    const leftLength = dfs(root.left); //Get left path length
    const rightLength = dfs(root.right); //Get right path length
    len = Math.max(len, leftLength + rightLength); //see if we found a longer path
    return Math.max(leftLength, rightLength) + 1; //return length of the path
  };
  dfs(root);
  return len;
};
