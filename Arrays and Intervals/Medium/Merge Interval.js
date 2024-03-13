/**
 * https://leetcode.com/problems/merge-intervals/description/
 */

/**
  * 1] Intervals overlap means -> start of next interval < end of previous interval. So we will only need to modify the ends of the intervals
 * 2] Sort the intervals by start of the intervals
 * 3] We will compare the last interval in the result array with the intervals in the intervals array
 * 4] Push the 0th interval onto the result (here last interval in the result array will be the previous one)
 * 5] If start in intervals array is less than end of last element in the result array then update the end in result array.
 How to update the end? Take max between the ends of current and last element in the result array
 *  else push the current interval as is in the result array

Time: O(NlogN) + O(N)
 Space:O(N)
 Asked in Cisco Meraki interview
 //[[5,7],[6,8],[6,7],[9,10],[10,12],[30,31],[31,34]]
  */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]],
    resIndex = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (result[resIndex][1] >= intervals[i][0]) {
      //overlapping
      result[resIndex][1] = Math.max(result[resIndex][1], intervals[i][1]);
    } else {
      //non-overlapping
      result.push(intervals[i]);
      resIndex++;
    }
  }
  return result;
};
