/**
 *https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 */

/**
 Using Iterative method
 If level is even add to the end of the array(temp)
 If level is odd add to the start of the array(temp)
  */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  let result = [],
    queue = [root],
    level = 0;
  while (queue.length > 0) {
    let qSize = queue.length,
      temp = [];
    while (qSize > 0) {
      let curr = queue.shift();
      level % 2 === 0 ? temp.push(curr.val) : temp.unshift(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
      qSize--;
    }
    result.push(temp);
    level++;
  }
  return result;
};

//Using Recursion
//If level number is odd add to the start (unshift) of the array
//If level number is even add to the end (push) of the array
/**
 result = [] level=0
 result = [[3]] level=0
 result = [[3],[]] level=1 -> result=[[3],[9]]
 result=[[3],[9]] level = 1 -> result=[[3],[20,9]]
 result=[[3],[20,9]] level = 2 -> result=[[3],[20,9], []] -> result=[[3],[20,9], [15]]
  */
var zigzagLevelOrder = function (root) {
  let result = [];
  const dfs = (node, level) => {
    if (!node) {
      return;
    }
    if (!result[level]) {
      result[level] = [];
    }
    if (level % 2 === 0) {
      result[level].push(node.val);
    } else {
      result[level].unshift(node.val);
    }
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 0);
  return result;
};
