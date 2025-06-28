/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 */

/**
 Using map
 1. Record a number and its frequency in the map
 2. Iterate the map and get first k keys from the map

 Time: O(NlogN)
 Space: O(N)
  */
var topKFrequent = function (nums, k) {
  let result = [];
  let map = {};
  for (let num of nums) {
    if (map[num] === undefined) {
      map[num] = 0;
    }
    map[num]++;
  }
  console.log(map);
  //let freq = Object.keys(map).map(Number).sort((a,b) => map[b] - map[a])
  //Object.keys(map).map(str => Number(str)).sort((a,b) => map[b] - map[a])
  let freq = Object.entries(map).map(([num, freq]) => [freq, parseInt(num)]);
  console.log(freq);
  freq.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < k; i++) {
    result.push(freq[i][1]);
  }
  return result;
};
