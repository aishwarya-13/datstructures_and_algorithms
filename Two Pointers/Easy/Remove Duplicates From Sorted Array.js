/**
 Use this solution
 Two pointers approach:
 Sub-category: Slow and fast pointer. Here i moves ahead of j to give some info to j
 i to iterate array
 j as placeholder for unique element

 Time: O(N)
 Space: O(1)
  */
var removeDuplicates = function (nums) {
  let i = 0, //to iterate the array
    j = 0; //placeholder for unique elements
  while (i < nums.length) {
    if (i !== j && nums[i] !== nums[j]) {
      j++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    i++;
  }
  return j + 1;
};

var removeDuplicates = function (nums) {
  let i = 1,
    j = 0;
  while (i < nums.length) {
    if (nums[i] != nums[j]) {
      j++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    i++;
  }
  return j + 1;
};
