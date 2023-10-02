/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 */

 /**
 1]Count frequency of each ele in a map
 2]Sort keys in map descending according to 'values'
 3]Push first k elements of sorted keys in array
  */
 var topKFrequent = function(nums, k) {
  let map = {},
      result = [];
  for(let num of nums){
      if(map[num] === undefined){
          map[num] = 0
      }
      map[num]++
  }
  //Sort object keys in descending order according to values
  let freq = Object.keys(map).sort((a,b)=> map[b] - map[a])
  for(let i=0; i<k; i++){
      result.push(freq[i])
  }
  return result
};