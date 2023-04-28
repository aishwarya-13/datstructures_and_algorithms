/**
 * https://leetcode.com/problems/fibonacci-number/description/
 */

/**

fib(1) returns 1 to fib(2)
fib(2) = fib(1)(returns 1) + fib(0) (returns 0) = 1+0=1
fib(3) = fib(2) + fib(1) = 1+1 = 2
fib(4) = fib(3) + fib(2) = 2+1 = 3
fib(5) = fib(4) + fib(3) = 3+2 = 5
 */

var fib = function(n){
    if(n < 2){
        return n;
    }
    return fib(n-2) + fib(n-1);
}

 /**
    Iterative approach
  */
/**
var fib = function(n) {
    let result = 0,
        f1 = 0,
        f2 = 1;
    for(let i=1; i<=n; i++){
        result = f2;
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
    return result;
};
 */
