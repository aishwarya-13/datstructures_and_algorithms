/**
 * https://leetcode.com/problems/partition-labels/description/
 */

/**
 1. Keep record of last index of each char.
 Why last index? Because we need to determine the boundaries of a partition and since the problem
 statement states a char cannot be repeated in another partition
 2. Iterate through array to cal size of each partition

 Time: O(N)
 Space: O(N)
  */
var partitionLabels = function (s) {
  let lastIndicesMap = {};
  //Record last index of each char
  for (let i = 0; i < s.length; i++) {
    lastIndicesMap[s[i]] = i;
  }
  console.log("lastIndicesMap", lastIndicesMap);
  let size = 0,
    end = 0,
    result = [];
  for (let i = 0; i < s.length; i++) {
    size++; //partition size
    end = Math.max(lastIndicesMap[s[i]], end); //record max fo the index
    if (i === end) {
      //when last index of char is encountered
      result.push(size); //record partition size
      size = 0; //reset
    }
  }
  return result;
};
