/**
 * https://leetcode.com/problems/length-of-last-word/
 */

var lengthOfLastWord = function(s) {
    let result = 0;
    for(let i=s.length-1; i>=0; i--){
        if(s[i] === ' '){
            if(result === 0){//space is present after last word
                continue;
            }else{//space is present before the last word so return the result
                return result;
            }
        }
        result++;
    }
    return result;
};