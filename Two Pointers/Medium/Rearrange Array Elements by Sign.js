/**
 * https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
 */

/**
posIndex and negIndex borh will increment by 2 because we have to place +ve -ve +ve -ve (in pairs)

Time: O(N)
Space: O(N)
 */

var rearrangeArray = function (nums) {
  let posIndex = 0,
    negIndex = 1,
    result = [];
  for (let ele of nums) {
    if (ele > 0) {
      result[posIndex] = ele;
      posIndex += 2;
    } else {
      result[negIndex] = ele;
      negIndex += 2;
    }
  }
  return result;
};

/**
Aishwarya - Self
Time: O(N)
Space: O(N)
 */

var rearrangeArray = function (nums) {
  let pos = 0, //to track positive integers
    neg = 0, //to track negative integers
    j = 0, //result array pointer
    result = [];
  while (pos < nums.length && neg < nums.length) {
    while (nums[pos] < 0) {
      //increment pos until a+ve integer is found
      pos++;
    }
    while (nums[neg] > 0) {
      //increment neg until a -ve integer is found
      neg++;
    }
    result[j++] = nums[pos++]; //Imp to move pos and neg ahead by 1 here else it will not go inside the while loop
    result[j++] = nums[neg++];
  }
  return result;
};

/**
 Brute force - self
 1. Create +ve intergers array
 2. Create -ve intergers array
 3. Merge both the arrays alternately

 Time: O(N)
 Space: O(N)
  */
var rearrangeArray = function (nums) {
  let pos = [],
    neg = [];
  result = [];
  for (let ele of nums) {
    if (ele > 0) {
      pos.push(ele);
    } else {
      neg.push(ele);
    }
  }
  console.log("pos", pos, "neg", neg);
  let p = 0,
    n = 0;
  while (p < pos.length || n < neg.length) {
    result.push(pos[p]);
    result.push(neg[n]);
    p++;
    n++;
  }
  return result;
};
