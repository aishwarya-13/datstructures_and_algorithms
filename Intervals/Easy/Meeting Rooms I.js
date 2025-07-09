/**
 * https://leetcode.com/problems/meeting-rooms/description/
 */

/**
Aishwarya
If current end time is >= next start time then person can attend current and next meeting
**/
var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      return false;
    }
  }
  return true;
};
