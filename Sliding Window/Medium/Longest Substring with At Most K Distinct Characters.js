/**
 * https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/description/
 */

/**
 * Without using mapLen
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let map = {},
        result =0,
        start=0;
    for(let end=0; end<s.length; end++){
        let char = s[end]
        if(map[char] === undefined){
            map[char] = 0
            k--
        }
        map[char]++
        if(k<0){
            map[s[start]]--
            if(map[s[start]] === 0){
                delete map[s[start]]
                k++
            }
            start++
        }
        result = Math.max(result, (end - start + 1))
    }
    return result
};

/**
    Aishwarya
Time: Outer for loop runs for O(N) time. Inner while loop processes each character only once (it will remove the char from start position)
 So inner while loop will run for O(N) time.
 Total = O(N) + O(N) ~ O(N)
 Space: O(k) We will store max k+1 chars in the map
**/
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let result = 0,
      start = 0,
      mapLen = 0,
      map = {};
  for(let end=0; end<s.length; end++){
      if(map[s[end]] === undefined){
          map[s[end]] = 0
          mapLen++
      }
      map[s[end]]++
      while(mapLen > k){
          if(map[s[start]] !== undefined){
              map[s[start]]--
              if(map[s[start]] === 0){
                  delete map[s[start]]
                  mapLen--
              }
              start++
          } 
      }
      result = Math.max(result, (end - start + 1))
  }
  return result
};