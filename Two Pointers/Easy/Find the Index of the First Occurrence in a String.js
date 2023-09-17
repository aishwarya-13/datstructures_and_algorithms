/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */

 /**
 Why iterate till haystack.length - needle.length?
 This is because we want to make sure that we don't run past the end of the haystack string while searching
 for the needle string.
 Time Complexity: O(n*m), where n is the length of the haystack string and m is the length of the needle string.
 The for loop iterates over n - m + 1 possible starting indices, and the while loop compares at most m characters
 for each index.
  */
 var strStr = function(haystack, needle) {
    for(let h=0; h<=haystack.length - needle.length; h++){
        let n = 0;
        while(n < needle.length && haystack[h+n] === needle[n]){
            n++
        }
        if(n === needle.length){
            return h
        }
    }
    return -1
};
