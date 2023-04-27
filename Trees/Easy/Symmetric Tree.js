/**
 * https://leetcode.com/problems/symmetric-tree/
 */

var isSymmetric = function(root) {
    return isSameTree(root.left, root.right);
};

//Here we need to compare p'left to q's right and vice-versa
const isSameTree = (p, q)=>{
    if(p === null && q === null){
        return true;
    }
    if(p === null || q === null || p.val !== q.val){
        return false;
    }
    let left = isSameTree(p.left, q.right),
        right = isSameTree(p.right, q.left);
    return left && right && p.val === q.val;
}

