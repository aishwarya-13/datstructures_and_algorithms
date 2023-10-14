/**
 * https://leetcode.com/problems/repeated-dna-sequences/description/
 */


 /**
    Get substrings of length 10 for every index.
    Add the substring in the seen hashset if not present (this set will track the substring if repeated or not)
    The result should also be a hash set because the string could be repeated and we don't want duplicate substrings in the result
    L=10
    Time: Outer for loop = O(N - L) * slice will take O(L) = O((N-L)L)
    Space: O((N-L)*L)??? how???
    The time complexity is O(n), where n is the length of the input string s. This is because we iterate over each 10-character substring in s, which takes O(n) time, and for each substring, we perform constant time operations (e.g., adding to a set), which do not affect the overall time complexity. Therefore, the overall time complexity is O(n).
    The space complexity  is O(n), where n is the length of the input string s. This is because we use two sets (seen and repeated) to store the substrings, which could have a maximum size of n/10 (since there are n/10 10-character substrings in the input string s). Therefore, the space complexity is proportional to the length of the input string, which is O(n).
  */
var findRepeatedDnaSequences = function(s) {
  let seen = new Set(),
      result = new Set(),
      strLen = 10;
  for(let i=0; i<=s.length - strLen; i++){
      let substr = s.slice(i, i+strLen)
      if(seen.has(substr)){
          result.add(substr)
      }else{
          seen.add(substr)
      }
  }
  return [...result]
};