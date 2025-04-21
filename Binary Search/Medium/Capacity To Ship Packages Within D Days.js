/**
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/
 */

/**
 Here two different points to consider
 1. The while loop is (left < right) NOT (left <= right)
 2. For condition <= right = mid needs to be applied
  */
var shipWithinDays = function (weights, days) {
  let left = Math.max(...weights), //We can set the minimum weight capacity of the ship to the maximum weight of any single package, since the ship must be able to carry at least one package.
    right = weights.reduce((sum, curr) => sum + curr, 0); //We can set the maximum weight capacity of the ship to the sum of all the package weights, since the ship must be able to carry all the packages in a single day.
  console.log("left", left, "right", right);
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    console.log("mid", mid);
    noOfDaysRequired = getNoOfDaysSpent(weights, mid);
    console.log("noOfDaysRequired", noOfDaysRequired);
    if (noOfDaysRequired > days) {
      //If the number of days required to ship all the packages is greater than days, then we know that
      //the weight capacity of the ship must be increased, so we set the minimum weight capacity to mid + 1.
      left = mid + 1;
    } else {
      //if days required are less or equal to target then we know that the weight capacity of the ship is sufficient,
      //so we set the maximum weight capacity to mid. because we need less weight to cover more days of the target days
      right = mid;
    }
  }
  return left;
};

const getNoOfDaysSpent = (weights, possibleWeight) => {
  let noOfDaysRequired = 1,
    currentLoad = 0;
  for (let i = 0; i < weights.length; i++) {
    if (currentLoad + weights[i] > possibleWeight) {
      // If adding the current weight exceeds capacity, start a new day
      noOfDaysRequired++;
      currentLoad = 0;
    }
    currentLoad += weights[i];
  }
  return noOfDaysRequired;
};
