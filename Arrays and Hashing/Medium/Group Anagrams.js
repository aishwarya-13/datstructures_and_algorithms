/**
 * https://leetcode.com/problems/group-anagrams/description/
 */
/**
    1] Iterate the array -> sort each string and add it in map. Create frequencies of each string
    <sorted string>:Array<string>
    2]Iterate the map and add result in array

    Time: O(WlogW * N) W - length of word and N - length of array
    Space: O(W*N)
 */
    var groupAnagrams = function(strs) {
      let map = {},
          result = []
      for(let str of strs){
          let sorted = str.split('').sort()
          if(map[sorted] === undefined){
              map[sorted] = [str]
          }else{
              map[sorted].push(str)
          }
      }
      for(let str in map){
          result.push(map[str])
      }
      return result
  };
