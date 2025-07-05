/**
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 */

/**
 1. Add the array in a set or map
 2. While iterating the array
    a. check if a previous number exists in the set
        i) If it does then skip the current iteration because the current ele whose previous number exists in the set cannot be the start of the sequence
        ii) If it does not exist then start counting the consecutive numbers
            a. Run a while loop until next number is found in the set and keep count of the length of the sequence

    Time: O(N)
    Space: O(N)
  */

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let result = 0;
  console.log("set", set);
  for (let num of set) {
    // Imp here instead of iterating nums array iterate set.
    //Why? If nums contains duplicates, you'll check the same number multiple times.
    //That can cause the inner while loop to be re-evaluated unnecessarily for numbers that are already part of a   previously counted sequence.
    //This increases effective run time, especially when nums is large and has many duplicates or long consecutive runs.

    if (!set.has(num - 1)) {
      let count = 1,
        curr = num;
      while (set.has(curr + 1)) {
        count++;
        curr++;
      }
      result = Math.max(result, count);
    }
  }
  return result;
};
