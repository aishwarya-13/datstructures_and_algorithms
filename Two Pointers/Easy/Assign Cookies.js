/**
 * https://leetcode.com/problems/assign-cookies/
 */
/**
 Mistakes made: 
 1. "Assumed the array is sorted". 
 2. Did not consider a scenario
 3. No need to add else loop for j++. j++ is written in if as well as else loop so remove else
 4. && consition in while condition

 Lessons learnt:
 1. Don't assume. Ask the interviewer explicitly.
 2. Consider all scenarios
 3. Try to reduce redundant else loops / code
 4. If two arrays are to be iterated see if we can put || && conditions

 Time: O(NlogN + MlogM)
 N - length of g array
 W - length of s array
 sorting takes logN, logM
 while loop -> O(M + N)

 Space: Sorting is done in-place so O(1)
 O(1)
  */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  console.log("g", g, "s", s);
  let contentCount = 0,
    i = 0,
    j = 0;
  while (j < s.length && i < g.length) {
    if (s[j] >= g[i]) {
      contentCount++;
      i++;
    }
    j++;
  }
  return contentCount;
};
