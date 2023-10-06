/**
 * https://leetcode.com/problems/fruit-into-baskets/
 */

/**
 Code and problem statement is same as https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/description/
 Only difference here is k =2
 Time: Outer for loop runs for O(N) time. Inner while loop processes each element only once (it will remove the element from start position)
 So inner while loop will run for O(N) time.
 Total = O(N) + O(N) ~ O(N)
 Space: O(k) We will store max k+1 elements in the map k here is 2
  */
 var totalFruit = function(fruits) {
  let result = 0,
      start = 0,
      map = {},
      k=2,
      mapLen = 0;
  for(let end=0; end<fruits.length; end++){
      if(map[fruits[end]] === undefined){
          map[fruits[end]] = 0
          mapLen++
      }
      map[fruits[end]]++
      while(mapLen > k){
          if(map[fruits[start]] !== undefined){
              map[fruits[start]]--
              if(map[fruits[start]] === 0){
                  delete map[fruits[start]]
                  mapLen--
              }
              start++
          }
      }
      result = Math.max(result, (end - start + 1))
  }
  return result
};