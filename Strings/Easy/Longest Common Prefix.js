/**
 * https://leetcode.com/problems/longest-common-prefix/
 */

/**
    Take the first element in array and match it with rest of the elements char by char
    N - length of array, W - max length of word
    Time: O(N*W), Space: O(1)
    ** Confirm Time
 */
    var longestCommonPrefix = function(str) {
        let prefix = '';
        for(let i=0; i<str[0].length; i++){
            for(let j=1; j<str.length; j++){
                if(str[0][i] !== str[j][i]){
                    return prefix;
                }
            }
            prefix+=str[0][i]
        }
        return prefix;
    };