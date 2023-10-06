/**
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 */

/**
 * Pattern: Arrays and Hashing
    solution: https://www.youtube.com/watch?v=P6RZZMu_maU&t=394s
 */
    var longestConsecutive = function(nums) {
      let set = new Set(nums),
          result = 0;
      for(let i=0; i<nums.length; i++){
          if(set.has(nums[i]-1)){//if ele is not start of a sequence then just skip it
              continue
          }
          //Found an ele that is start of a seq so start counting the length of seq
          let count = 1
              curr = nums[i]
          while(set.has(curr+1)){
              count+=1
              curr+=1
          }
          result = Math.max(result, count)
      }
      return result
  }


/**
    Using map , sort and brute force approach
 */
    var longestConsecutive = function(nums) {
      if(!nums.length){
          return 0
      }
      let map = {},
          count = 0,
          result = 0;
      for(let i=0; i<nums.length; i++){
          if(map[nums[i]] === undefined){
              map[nums[i]] = nums[i]
          }
      }
      let arr = Object.values(map).sort((a,b)=> map[a] - map[b])
      console.log(arr)
      for(let i=0; i<arr.length; i++){
          if(arr[i] + 1 === arr[i+1]){
              count++
          }else{
              result = Math.max(result, count)
              count = 0
          }
      }
      return result+1
  } 