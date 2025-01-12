/**
 * https://leetcode.com/problems/binary-tree-right-side-view/description/
 */
/**
 Brute force - Self
1. Iterative level order traversal with one difference -> push right child first instead of left
 This way we have the right side nodes first
2. Iterate the tarversed nodes array
    i. in the result array push the first element only
    If result array has 2 elemenst then the first element is the right side of the node
    If the result array has 1 element then that element is seen from the right side no matter if its left child or right child

  */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  let result = [],
    queue = [root],
    rightSideView = [root.val];
  while (queue.length > 0) {
    let qSize = queue.length;
    while (qSize > 0) {
      let curr = queue.shift();

      if (curr.right) {
        queue.push(curr.right);
      }
      if (curr.left) {
        queue.push(curr.left);
      }
      qSize--;
    }
    result.push(temp);
  }
  console.log("result", result);

  for (let arr of result) {
    rightSideView.push(arr.shift());
  }
  console.log("rightSideView", rightSideView);
  return rightSideView;
};
