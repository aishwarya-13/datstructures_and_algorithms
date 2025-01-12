/**
 * https://leetcode.com/problems/all-elements-in-two-binary-search-trees/description/
 */
/**
 Self

Note:IMP to use a comparator function when sorting else it will result in unexpected results
Without a comparison function, sort() converts the elements to strings and then compares their UTF-16 code unit values.
This often results in lexicographical (alphabetical) order, which can produce unexpected results for integers.

const numbers = [5, 2, 10, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 5, 10]
Here, 10 comes before 2 because '10' is lexicographically smaller than '2'.

Key Difference:
sort() without a comparator may work incorrectly for numerical sorting due to string conversion.
sort((a, b) => a - b) ensures proper numerical sorting by directly comparing the numbers.

  */
var getAllElements = function (root1, root2) {
  const nodesArr1 = inorder(root1);
  const nodesArr2 = inorder(root2);
  return [...nodesArr1, ...nodesArr2].sort((a, b) => a - b); //IMP to use a comparator function when sorting else it will result in unexpected results
};

const inorder = (node) => {
  if (!node) {
    return [];
  }
  const left = inorder(node.left);
  const right = inorder(node.right);
  return [...left, node.val, ...right];
};
