/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */

 /**
 Use binary search
  */
 var sortedArrayToBST = function(nums) {
    return createTree(0, nums.length-1, nums);
};

const createTree = (start, end, nums)=>{
    if(start === end){
        return new TreeNode(nums[start]);
    }
    if(start > end){
        return null;
    }
    let mid = start + Math.floor((end - start) / 2);//get mid in the array
    let newNode = new TreeNode(nums[mid]);//create new node with mid value in the array
    newNode.left = createTree(start, mid-1, nums);//create left subtree for the new node
    newNode.right = createTree(mid+1, end, nums);//create right subtree for the new node
    return newNode;
}
