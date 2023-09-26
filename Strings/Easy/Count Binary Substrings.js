/**
 * https://leetcode.com/problems/count-binary-substrings/
 */

 /**
We find block of elements that are grouped together.
We will use curr to track the length of uniform substring
Once the substring becomes not uniform we will get the min out of curr and prev to count the number of substrings between the current and previous group.

Time:O(N)
Space:O(1)
**/
var countBinarySubstrings = function(s) {
  let curr = 1,//counts the consecutive 1s or 0s
      prev = 0,//keeps track of the previous uniform string
      result = 0;//counts the susbtrings
  for(let i=1; i<s.length; i++){
      //non-uniform substring found so take the result and reset the counters curr and prev
      if(s[i] !== s[i-1]){
          //this result will always take into accoun the previous group
          result+= Math.min(curr, prev)
          prev = curr
          curr = 1
      }else{
          curr++//increase curr because 
      }
  }
  result+= Math.min(curr, prev)//count the last group
  return result;
};

/**
https://www.youtube.com/watch?v=MGPHPadxhtQ
 */