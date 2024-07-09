//https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/

var getTargetCopy = function (original, cloned, target) {
  if (!original) {
    return null;
  }
  if (original.val === target.val) {
    return cloned;
  }
  return (
    getTargetCopy(original.left, cloned.left, target) ||
    getTargetCopy(original.right, cloned.right, target)
  );
};
