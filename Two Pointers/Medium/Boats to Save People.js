/**
 * https://leetcode.com/problems/boats-to-save-people/
 */

/**
 The goal is to minimize the number of boats required.
 That means we need to put as much weight upto given limit as possible in one boat.
 So, sort the array ascending.
 If the heaviest person can share a boat with the lightest person, then do so.
 Otherwise, the heaviest person can't pair with anyone, so they get their own boat.
Take sum pf left and right pointers (lighter and heavier people)
If the sum is below or equal to limit then they can go in one boat. Move both pointers ahead
If sum is greater than the limit then only the heavier person can go in one boat so just move the right pointer ahead

This is a greedy approach because at a particular time we are deciding the optimal way to put people on boat
(reduce left and right or just the right pointer) and then adding it up to the solution

Time: O(N)
Space: O(1)
  */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let boats = 0,
    left = 0,
    right = people.length - 1;
  while (left <= right) {
    let sum = people[left] + people[right];
    if (sum <= limit) {
      boats++;
      left++;
      right--;
    } else {
      boats++;
      right--;
    }
  }
  return boats;
};
