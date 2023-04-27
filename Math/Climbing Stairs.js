/**
 * https://leetcode.com/problems/climbing-stairs/
 */

var climbStairs = function(n) {
    let curr = 1,
        prev = 1;
    for(let i=2; i<= n; i++){
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
    
  // let seq = [0,1];
  //   for(let i=2; i<=n; i++){
  //       seq.push(seq[i-2] + seq[i-1])
  //   }
  //   return seq[n-1] + seq[n];
};