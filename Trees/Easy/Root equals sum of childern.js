/**
 *https://leetcode.com/problems/root-equals-sum-of-children/description/
 */

/**
 Self
  */
var checkTree = function (root) {
  return root.val === root.left.val + root.right.val;
};
