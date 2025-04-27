/**
Solution: https://www.youtube.com/watch?v=BltzCxN1vRc
Binary search
 */
var findKthPositive = function (arr, k) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2),
      countOfMissingNumbers = arr[mid] - (mid + 1);
    if (countOfMissingNumbers < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left + k;
};

/**
Two pointers approach: Self
Compare each array element with j (tracks which number is missing)
If both are not equal it means a missing number is found so decrease k
When k is 0 we have found all the missing numbers and j points to the missing number

Time: O(N)
Space: O(1)
 */
var findKthPositive = function (arr, k) {
  let i = 0, //index to track array
    j = 1; //to track the missing number
  while (k > 0) {
    console.log("k", k, "j", j);
    if (arr[i] !== j) {
      //both are not equal so just move the j pointer ahead
      k--; //found one missing number
      j++;
    } else if (arr[i] === j) {
      //if both are equal then move both pointers ahead
      i++;
      j++;
    }
  }
  console.log("k", k, "j", j);
  return j - 1;
};

var findKthPositive = function (arr, k) {
  let i = 0,
    num = 1;
  while (k > 0) {
    if (arr[i] === num) {
      i++;
    } else if (--k === 0) {
      return num;
    }
    num++;
  }
};

var findKthPositive = function (arr, k) {
  let set = new Set(arr),
    num = 1;
  while (k > 0) {
    if (!set.has(num) && --k === 0) {
      return num;
    }
    num++;
  }
};

//Brute force
// var findKthPositive = function (arr, k) {
//   let allArr = [];
//   for (let i = 1; i <= arr[arr.length - 1] + k; i++) {
//     allArr.push(i);
//   }
//   console.log("all", allArr);
//   let missingNumbers = [];
//   let i = 0,
//     j = 0;
//   while (j < allArr.length) {
//     if (i < arr.length && arr[i] === allArr[j]) {
//       i++;
//       j++;
//     } else {
//       missingNumbers.push(allArr[j]);
//       j++;
//     }
//   }
//   console.log("missingNumbers", missingNumbers);
//   for (let i = 0; i < missingNumbers.length; i++) {
//     k--;
//     if (k === 0) {
//       return missingNumbers[i];
//     }
//   }
//   return -1;
// };
