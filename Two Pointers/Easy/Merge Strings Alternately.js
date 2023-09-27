/**
 * https://leetcode.com/problems/merge-strings-alternately/description/
 */

 //Time: O(N) length of largest string
 //Space: O(1)
 var mergeAlternately = function(word1, word2) {
  let w1 = 0,
      w2 = 0,
      res = '';
  while(w1<word1.length || w2<word2.length){
      if(word1[w1]){
          res+= word1[w1]
          w1++
      }
      if(word2[w2]){
          res+= word2[w2]
          w2++
      }
  }
  return res
};