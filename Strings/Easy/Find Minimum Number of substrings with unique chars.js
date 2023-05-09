/**
 * Given a string S of length N, return the min number of substings into which the string has to be split
 * Spilt the string in such a way that no letter occurs more than once in each substring
 * Ex: 'world' -> 1
 * 'abacdec' -> 3 'ab' 'acde' 'c'
 */
function solution(S) {
    if(!S){
        return 0;
    }
    let map = {},
        result = 1;
    for(let end=0; end<S.length; end++){
        if(map[S[end]] === undefined){
            map[S[end]] = end;
        }else{
            result++;
            map = {};
            map[S[end]] = end;
        }
    }
    return result;
}

console.log(solution('abcdefga'));