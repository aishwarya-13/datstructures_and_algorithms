/**
 * https://leetcode.com/problems/duplicate-zeros/
 */

 /**
    Time: O(N)
    Space: O(1)
  */
    var duplicateZeros = function(arr) {
      //1]Count the number of zeros
      let zeros = 0,
          lastIndex = arr.length - 1;
      //Iterate till the index, whose elements would be part of the result array
      for(let i=0; i<= lastIndex - zeros; i++){
          if(arr[i] === 0){
              //Edge case.This zero cannot be duplicated.We have no more space
              if(i === lastIndex - zeros){
                  arr[lastIndex] = 0
                  lastIndex--
                  break
              }
              zeros++
          }
      }
      //2] Start backwards from last element which would be part of new array
      let last = lastIndex - zeros;
      for(let i=last; i>=0; i--){
          //Copy zero twice and non-zeros once i.e we need to shift the elements to the right
          //So shift zero twice and non-zeros once to the right
          if(arr[i] === 0){
              arr[i+zeros] = 0;//shift to right
              zeros--
              arr[i+zeros] = 0;
          }else{
              arr[i+zeros] = arr[i]
          }
      }
  };