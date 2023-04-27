/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */

 /**
 Why iterate till haystack.length - needle.length?
 This is because we want to make sure that we don't run past the end of the haystack string while searching for the needle string.
 Time Complexity: O(n*m), where n is the length of the haystack string and m is the length of the needle string. The for loop iterates over n - m + 1 possible starting indices, and the while loop compares at most m characters for each index.
  */
 var strStr = function(haystack, needle) {
    if(needle === ''){
        return -1;
    }
    for(let i=0; i<=haystack.length - needle.length; i++){
        let j=0;
        while(j < needle.length && haystack[i+j] === needle[j]){
            j++;
        }
        if(j === needle.length){
            return i;
        }
    }
    return -1;
};
