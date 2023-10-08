/**
 * https://leetcode.com/problems/minimum-window-substring/description/
 */

 /**
 Solution is similar to Permutation in a string
  */
 var minWindow = function(s, t) {
  if(t === '' || s.length < t.length) return ''
  let map = {},
      start = 0,
      result = '',
      mapLen = 0;
  //Create freq of chars in t
  for(let char of t){
      if(map[char] === undefined){
          map[char] = 0
          mapLen++
      }
      map[char]++
  }
  console.log(map)
  for(let end=0; end<s.length; end++){
      let char = s[end]
      if(map[char] !== undefined){
          map[char]--
      }
      if(map[char] === 0){
          mapLen--
      }
      while(mapLen === 0){//found all chars that matched
          let currrentSubstrLen = (end - start + 1)
          if(!result || currrentSubstrLen < result.length){//record min length
              result = s.slice(start, end+1)
          }
          const c = s[start]
          if(map[c] === 0){//increase mapLen count because 'c' char is an exact count
              mapLen++
          }
          if(map[c] !== undefined){
              map[c]++//add char back in map
          }
          start++
      }
      
  }
  return result
};

/**
 * Footnote: Find all anagrams, Permutation in a string and Min Window substring have similar solution
 */