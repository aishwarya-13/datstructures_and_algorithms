/**
 * https://leetcode.com/problems/binary-tree-right-side-view/description/
 */

//Using recursion
//Using solution for Level order traversal using recursion
//Only difference here would be to overwrite the index/level if right node is present

var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const dfs = (node, level) => {
    if (!node) {
      return;
    }
    result[level] = node.val;
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 0);
  return result;
};

/**
 If i == levelLength - 1, then it's the last node in the current level, push it to rightsize list.
 
1. result = [], queue = [3], qSize = 1
    i=0, curr = 1, result = [1], queue=[2,3]
2. result = [1] queue=[2,3] qSize = 2
    i=0, curr = 2, queue=[3], result = [1], queue=[3,4]
    i=1, curr = 3, queue=[4] result = [1, 3] queue=[4]
3. result = [1, 3] queue=[4], qSize=1
    i=0 curr=4 queue=[] result=[1,3,4] queue=[5]
4. result=[1,3,4] queue=[5] qSize=1
    i=0 curr=5 queue=[] result=[1,3,4,5] queue=[]

    result=[1,3,4,5]

  */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  let result = [],
    queue = [root];
  while (queue.length > 0) {
    let qSize = queue.length;
    for (let i = 0; i < qSize; i++) {
      let curr = queue.shift();
      if (i === qSize - 1) {
        result.push(curr.val);
      }
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  console.log("result", result);
  return result;
};

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
