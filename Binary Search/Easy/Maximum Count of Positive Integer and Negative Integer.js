/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 1. Find the first index of positive integer
 2. Find the last index of -ve integer (Why? Bz 0 i neither +ve nor -ve)
 3. The indices will give count of pos and -ve integers

 Perform BS to find those indices

 Time: O(log N)
 Space: O(1)
  */
var maximumCount = function (nums) {
  const firstPosIndex = getIndex(nums, true);
  const lastNegIndex = getIndex(nums, false);
  console.log("firstPosIndex", firstPosIndex, "lastNegIndex", lastNegIndex);
  if (firstPosIndex === -1 && lastNegIndex === -1) {
    //ex: [0,0] here both indices are -1
    return 0;
  } else if (firstPosIndex === -1) {
    return lastNegIndex + 1; //-ve count
  } else {
    const posCount = nums.length - firstPosIndex;
    const negCount = lastNegIndex + 1;
    console.log("posCount", posCount, "negCount", negCount);
    return Math.max(posCount, negCount);
  }
};

const getIndex = (nums, isPos) => {
  let left = 0,
    right = nums.length - 1,
    index = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (isPos) {
      if (nums[mid] > 0) {
        //found pos integer
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < 0) {
        //found negative integer
        index = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return index;
};

/**
1. Linearly iterate the array to count positive and negative integers
2. Return max of the count

 Time: O( N)
 Space: O(1)
  */
var maximumCount = function (nums) {
  let posCount = 0,
    negCount = 0;
  for (let ele of nums) {
    if (ele > 0) {
      posCount++;
    } else if (ele < 0) {
      negCount++;
    }
  }
  return Math.max(posCount, negCount);
};
