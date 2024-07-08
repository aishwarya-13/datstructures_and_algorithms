/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */

/**
 Need to create tree recursively (Iterative will not work like you attempted)
 We need to construct a BST and since the array is sorted, 
 the mid will be the root and from mid's left will become left subtre and from mid's right will become right subtree
 And this needs to be done recursively
  */
var sortedArrayToBST = function (nums) {
  return createTree(nums, 0, nums.length - 1);
};

const createTree = (nums, left, right) => {
  if (left > right) {
    return null;
  }
  const mid = left + Math.floor((right - left) / 2); //get mid in the array
  const node = new TreeNode(nums[mid], null, null); //create new node with mid value in the array
  node.left = createTree(nums, left, mid - 1); //create left subtree for the new node
  node.right = createTree(nums, mid + 1, right); //create right subtree for the new node
  return node;
};
