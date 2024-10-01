## How to store previous value in BST

var minDiffInBST = function(root) {
const result = Infinity
let prev = -Infinity//always take prev as -Infinity
const dfs = (node) =>{
if(!node){
return
}
dfs(node.left)
console.log('node', node.val, 'prev', prev)
prev = node.val
dfs(node.right)
}
dfs(root)
return result
};

## Things to keep in mind about BST

1. In BST, the right side of node contains value > node and left side contains value < than node
2. In-order traversal of BST gives a sorted array in ascending order (Left -> root -> right)
3. Reverse in-order trversal of BST gives sorted array in descending order (Root -> Left -> right)
   https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/
