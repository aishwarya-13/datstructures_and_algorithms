/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 */

 /**
 * The number of chars that can be replaced at a given point is given by length of the array at the given point - maximum frequency of a char in the map at that point
* The reason we do not update the maxFreq while sliding the window is because we are finding the max length.
 * So max length was already recorded before the window was slid ahead and len is going to increase only when 
 * the maxFreq value increases.
 * Since we are removing the element from the window, updating maxFreq is not required. 
 */
/**
 * Time complexity: O(N)
 * Space complexity: O(26) (considering only lowercase or uppercase input) ~ O(N) 
 */
var characterReplacement = function(str, k) {
  let map = {},
      start = 0,
      result = 0,
      maxFreq = 0;
  for(let end=0; end<str.length; end++){
      if(map[str[end]] === undefined){
          map[str[end]] = 0
      }
      map[str[end]]++
      maxFreq = Math.max(map[str[end]], maxFreq)
      let len = (end - start + 1) - maxFreq
      if(len > k){
          map[str[start]]--
          start++
      }
      result = Math.max(result, (end - start + 1))
  }
  return result
};