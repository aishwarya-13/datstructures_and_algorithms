/**
 * https://leetcode.com/problems/pascals-triangle-ii/
 */

/**
Using recursion
        f(0) return [1]
[1]     f(1) return [1,1]
[1,1]   f(2) return [1,2,1]
[1,2,1] f(3) return [1,3,3,1]

Time: O(N)
Space: O(1)
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0){
        return [1];
    }else{
        let prevResult = getRow(rowIndex - 1),
            currResult = [1];
        for(let i=1; i<=prevResult.length - 1; i++){
            currResult.push(prevResult[i-1] + prevResult[i])
        }
        currResult.push(1);
        return currResult;
    }
};