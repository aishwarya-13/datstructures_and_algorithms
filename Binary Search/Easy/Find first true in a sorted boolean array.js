/**
 * Q: An array of boolean values is divided into two sections; the left section consists of all 
 * false and the right section consists of all true. Find the First True in a Sorted Boolean Array of the 
 * right section, i.e. the index of the first true element.
 *  
 * If there is no true element, return -1.
 *  arr = [false, false, true, true, true]
 * ans: 2
 */

function findBoundary(arr){
  let left =0,
  right = arr.length - 1
  while(left <= right){
    let mid = left + Math.floor((right - left) / 2)
    if(arr[mid] === true){
        right = mid - 1
    }else{
        left = mid + 1
    }
  }
  return left > arr.length - 1 ? -1 : left;
}

/**
 * Alternative solution using a variable
 */

function findBoundary(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid]) {
          boundaryIndex = mid;
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return boundaryIndex;
}