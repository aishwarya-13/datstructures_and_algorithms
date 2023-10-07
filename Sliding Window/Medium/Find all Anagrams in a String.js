/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 */

/**
    Here window will be equal to the length of pattern
 */
    var findAnagrams = function(str, pattern) {
      let map = {},
          mapLen = 0,
          start = 0,
          matched = 0,
          result = [];
      //Calculate frequency of chars in pattern
      for(let p of pattern){
          if(map[p] === undefined){
              map[p] = 0
              mapLen++
          }
          map[p]++
      }
      for(let end=0; end<str.length; end++){
          let char = str[end]
          if(map[char] !== undefined){
              map[str[end]]--
          }
          if(map[char] === 0){//found a char match
              matched++//count the frequncies of chars being matched
          }
          if(matched === mapLen){//found a anagram
              result.push(start)
          }
          //if window size exceeds
          if(end >= pattern.length - 1){
              if(map[str[start]] !== undefined){
                  if(map[str[start]] === 0){
                      matched--
                  }
                  map[str[start]]++//add char back in the map
              }
              start++//slide window ahead
          }
      }
      return result;
  };
