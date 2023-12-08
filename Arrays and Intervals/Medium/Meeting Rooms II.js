/**
 * https://leetcode.com/problems/meeting-rooms-ii/
 */

 /**
 Aishwarya

The thought:
1. Whenever there is a start meeting, we need to add on room.
2. But before adding rooms, we check to see if any previous meeting ends, which is why we check start with first end.
3. When the start > end, it means at this time one of the previous meeting ends, and it can take and resue that room.
4. Then next meeting start need to be compared with second end because the first end's room is already taken.
  */
var minMeetingRooms = function(intervals) {
  let start = []
  let end = []
  intervals.forEach((interval)=>{
      start.push(interval[0])
      end.push(interval[1])
  })
  start.sort((a,b)=> a-b)
  end.sort((a,b)=> a-b)
  let rooms = 0
  let endIndex = 0
  for(let s=0; s<start.length; s++){
      rooms++ //add a room when meeting starts
      if(start[s] >= end[endIndex]){//if previous meeting ended
          rooms--
          endIndex++
      }
  }
  return rooms
};