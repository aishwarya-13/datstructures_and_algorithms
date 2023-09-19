/**
 * https://leetcode.com/problems/assign-cookies/
 */
 /**
    The cookie should be greater than or equal to greed.
    So sort both the arrays and compare the elements
    Time: O(G) number of children - size of greed array
    Space: O(1)
    g=[7,8,9,10]
    c=[5,6,7,8]
    Time: O(nlogn)
    Space: O(1)
  */
    var findContentChildren = function(greed, cookies) {
      greed.sort((a,b)=>a-b)
      cookies.sort((a,b)=>a-b)
      let g = 0,
          c = 0,
          result = 0
      while(g < greed.length && c < cookies.length){
          if(cookies[c] >= greed[g]){
              result++
              c++
              g++
          }else{
              c++
          }
      }
      return result
  };