/**
 * https://leetcode.com/problems/subtree-of-another-tree/
 */

var isSubtree = function(root, subRoot) {
    if(!root){
        return false;
    }
    return isSameTree(root, subRoot) || subRoot(root.left, subRoot) ||
            isSameTree(root.right, subRoot);
};

const isSameTree = (p, q)=>{
    if(!p && !q){
        return true;
    }
    if(!p || !q || p.val !== q.val){
        return false;
    }
    const left = isSameTree(p.left, q.left);
    const right = isSameTree(p.right, q.right);
    return left && right && root.val;
}