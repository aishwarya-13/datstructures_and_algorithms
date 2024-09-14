//https://leetcode.com/problems/leaf-similar-trees/description/

/**
 Brute force
 We cannot traverse both the trees simultaneously because depth of both trees are different
  */
var leafSimilar = function (root1, root2) {
  const leafSeq1 = getLeafSeq(root1);
  console.log("leafSeq1", leafSeq1);
  const leafSeq2 = getLeafSeq(root2);
  console.log("leafSeq2", leafSeq2);
  return leafSeq1 === leafSeq2;
};

const getLeafSeq = (node) => {
  if (!node) {
    return "";
  }
  if (!node.left && !node.right) {
    return node.val;
  }
  const left = getLeafSeq(node.left);
  const right = getLeafSeq(node.right);
  let str = left && right ? `${left}->${right}` : left && !right ? left : right;
  return str;
};

/**
 Brute force
 We cannot traverse both the trees simultaneously because depth of both trees are different
  */
var leafSimilar = function (root1, root2) {
  const root1Leaves = getLeavesLeftToRight(root1);
  console.log("root1Leaves", root1Leaves);
  const root2Leaves = getLeavesLeftToRight(root2);
  console.log("root2Leaves", root2Leaves);
  return root1Leaves === root2Leaves;
};

const getLeavesLeftToRight = (node) => {
  let result = "";
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    dfs(node.right);
    if (!node.left && !node.right) {
      result += `${node.val}->`;
    }
  };
  dfs(node);
  return result;
};
