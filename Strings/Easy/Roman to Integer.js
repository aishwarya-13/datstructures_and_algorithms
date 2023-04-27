/**
 * https://leetcode.com/problems/roman-to-integer/
 */

 /**
 If current ele < next ele then we need to club curr and next ele together
 else treat current ele as single entity
 Time: O(N)
 Space: O(1)- constant space for map
  */
 var romanToInt = function(str) {
    let map = {
              'I': 1,
              'V': 5,
              'X': 10,
              'L': 50,
              'C': 100,
              'D': 500,
              'M': 1000
      };
      let result = 0,
          i = 0;
      while(i<str.length){
          //If next is greater than previous one then its either 4's or 9's
          if(map[str[i]] < map[str[i+1]]){
              result+= map[str[i+1]] - map[str[i]];
              i++;
          }else{
              result+= map[str[i]];
          }
          i++;
      }
      return result;
  };
