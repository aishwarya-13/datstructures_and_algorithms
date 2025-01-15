/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
 */

/**
    Learning
    **dfs(node.left, index) -> Cannot get index like this from function call because it is specific to the path
    Keeping a global variable will give the index / position of the kth element

    Logic: Traverse the tree in-order(it gives a soted array)
    Decrement k OR maintain a variable "position"(imagine index of sorted array that will give the kth element)
    When k is zero or position is k then we have the required result
  */
var kthSmallest = function (root, k) {
  let kthSmallest = -1;
  position = 0;
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    console.log("node", node.val, "k", k, "position", position);
    //k--
    // if(k === 0){
    //     kthSmallest = node
    //     return
    // }
    position++;
    if (position === k) {
      return (kthSmallest = node);
    }
    dfs(node.right);
  };
  dfs(root);
  return kthSmallest.val;
};
