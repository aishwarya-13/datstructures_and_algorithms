/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

var lengthOfLongestSubstring = function(str) {
  let result = 0,
      start = 0,
      map = {};
  for(let end=0; end<str.length; end++){
      if(map[str[end]] !== undefined){
          start = Math.max(map[str[end]] + 1, start)
      }
      map[str[end]] = end
      result = Math.max(result, (end - start + 1))
  }
  return result
};

 /**
 * //In sliding window technique, we expand the window if the window continues to satisfy the condition
Use hashmap to remember last index of each char processed.
When we get a duplicate we will shrink the sliding window
How to shrink the window? -> Replace start with the index of char in the map (This ensures we have distinct chars 
in the sliding window)
//We cannot replace the start with index from map in all scenarios because of scenario 'abba'
//In case of 'abba' when end is 3 and start is 2 we cannot replace start with 0(a:0, b:2)
//So we will take max of start 
Time: O(N)
Space: O(N)
*/
var lengthOfLongestSubstring = function(str) {
  let map = {},
      start = 0,
      result = 0;
  for(let end=0; end<str.length; end++){
      if(map[str[end]] === undefined){
          map[str[end]] = end;
      }else{
          start = Math.max(start, map[str[end]] + 1);
          map[str[end]] = end;
      }
      result = Math.max(result, (end - start + 1));
  }
  return result;
};