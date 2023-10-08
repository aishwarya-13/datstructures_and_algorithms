/**
 * https://leetcode.com/problems/permutation-in-string/description/
 */

//Here windows len will be equal to pattern length
/**
1]Create a map of pattern and calculate maps length
2]Iterate string. Keep a count of number of chars being matched
a)If a char exists in map decrease its count. If count becomes zero we got one char matched
b)If all chars match we have a permutation in the string
c)When window exceeds the pattern length, slide the window
    Add the char back in the map
    And decrease the count of matched

How to explain?
Ill use sliding window technique + a hashmap to record the frequency of characters in the map.
First iterate pattern to record the frequency of characters in the map. Also record the length of map.
Iterate str here Ill use sliding window.
As I iterate from left to right if a char exists in map ill decrease its frequency and once the frequency becomes 0 we have one matched char.
Once the end pointer exceeds the length of pattern, window can be shrunken.
Remove the start ele from the window if it exists in the map
When number of matched chars becomes equal to pattern length we have a permutation.
 */
var checkInclusion = function(pattern, str) {
  let map = {},
      start = 0,
      mapLen = 0,
      matched = 0;
  //Create map of frequencies of char in pattern
  for(let char of pattern){
      if(map[char] === undefined){
          map[char] = 0
          mapLen++
      }
      map[char]++
  }
  for(let end=0; end<str.length; end++){
      let char = str[end]
      if(map[char] !== undefined){
          map[char]--
      }
      if(map[char] === 0){//found a char match
          matched++
      }
      if(matched === mapLen){//found the permutation
          return true
      }
      if(end >= pattern.length - 1){
          if(map[str[start]] !== undefined){
              if(map[str[start]] === 0){
                  matched--
              }
              map[str[start]]++//add char back in the map
          }
          start++//slide the window
      }
  }
  return false;
};

/**
 * Footnote: Find all anagrams, Permutation in a string and Min Window substring have similar solution
 */