/**
 * https://leetcode.com/problems/first-bad-version/description/
 */

//You are given an api which will take a number as input and return if it is a bad version
//You have to write a function to determine the first bad version.
//You have to return a function
var solution = function(isBadVersion) {
  return (n)=>{
      let left = 1,
          right = n;
      while(left <= right){
          let mid = left + Math.floor((right - left) / 2);
          if(isBadVersion(mid)){
              right = mid-1;
          }else{
              left = mid+1;
          }
      }
      return left;
  }
};

//You are given an api which will take a number as input and return if it is a bad version
//You have to write a function to determine the first bad version.
//You have to return a function
/**
    Using an extra variable
 */
    var solution = function(isBadVersion) {
      return (n)=>{
          let left = 1,
              right = n,
              boundaryIndex = -1;
          while(left <= right){
              let mid = left + Math.floor((right - left) / 2);
              if(isBadVersion(mid)){
                  boundaryIndex = mid
                  right = mid-1;
              }else{
                  left = mid+1;
              }
          }
          return boundaryIndex;
      }
  };
