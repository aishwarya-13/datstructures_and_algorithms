/**
 * https://leetcode.com/problems/same-tree/
 */

//Recursive Bottom Up
var isSameTree = function(p, q) {
    if(p === null && q === null){
        return true;
    }
    if(!p || !q || p.val !== q.val){
        return false;
    }
    let left = isSameTree(p.left, q.left),
        right = isSameTree(p.right, q.right),
        val = p.val === q.val;
    return left && right && val;
};
