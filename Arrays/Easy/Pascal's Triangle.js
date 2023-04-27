/**
 * https://leetcode.com/problems/pascals-triangle/
 */

/**
    Time: O(N^2)
    Space: O(N^2)
    EXTRA space is any space used outside of what you are returning as the output in order to help solve the algo.Ask your interviewer if the output counts toward extra space. Or even stating both i.e. (n^2 space if you count the output and constant space if you dont)
 */
    var generate = function(numRows) {
        let result = [];
        for(let i=0; i<numRows; i++){
            let temp = [];
            for(let j=0; j<=i; j++){
                if(j === 0 || j === i){//if first or last index then push one
                    temp.push(1);
                }else{
                    //take previous array from result and form that array add up previous and current ele
                    temp.push(result[i-1][j-1] + result[i-1][j])
                }
            }
            result.push(temp);
        }
        return result;
    };
    