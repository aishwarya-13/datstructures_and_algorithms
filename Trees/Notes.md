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
