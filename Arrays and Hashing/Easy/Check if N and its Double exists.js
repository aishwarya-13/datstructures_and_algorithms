/**
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/description/
 */

var checkIfExist = function(arr) {
  let set = new Set()
  for(let num of arr){
      if(set.has(num * 2) || set.has(num / 2)){
          return true
      }else{
          set.add(num)
      }
  }
  return false
};

var checkIfExist = function(arr) {
  let map = {};
  for(let i=0; i<arr.length; i++){
      if(map[arr[i] / 2] !== undefined || map[2 * arr[i]] !== undefined){
          return true;
      }else{
          map[arr[i]] = arr[i];
      }
  }
  return false;
};