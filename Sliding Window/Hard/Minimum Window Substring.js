/**
 * https://leetcode.com/problems/minimum-window-substring/description/
 */

/**
 * Using extra variable 'matched'
 */
 /**
 Solution is similar to Permutation in a string
 In Problems, Permutation in a string and Find all anagrams we have to find the exact pattern in the given string so the window will be equal to length of pattern length
 But here we dont have to find exact pattern but a substring that includes all characters of the pattern so here the window will slide until matched chars 
  */
 var minWindow = function(s, t) {
    let map = {},
        mapLen = 0,
        start = 0,
        matched = 0,
        result = '';
    //Create map of freq
    for(let char of t){
        if(map[char] === undefined){
            map[char] = 0
            mapLen++
        }
        map[char]++
    }
    //iterate string
    for(let end=0; end<s.length; end++){
        let char = s[end]
        if(map[char] !== undefined){
            map[char]--
        }
        if(map[char] === 0){
            matched++
        }
        while(matched === mapLen){
            let currStr = s.slice(start, end + 1)
            if(!result || currStr.length < result.length){
                result = currStr
            }
            let ch = s[start]
            if(map[ch] === 0){
                matched--
            }
            if(map[ch] !== undefined){
                map[ch]++
            }
            start++
        }
    }
    return result
};

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