/**
 * https://leetcode.com/problems/meeting-rooms/description/
 */

/**
    Aishwarya
    If end time of current interval is greater than start time of next interval
    then the person cannot attend the meeting
    Time: O(N)
    Space: O(NlogN)
**/
var canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    for(let i=0; i<intervals.length - 1; i++){
        if(intervals[i][1] > intervals[i + 1][0]){
            return false
        }
    }
    return true
};