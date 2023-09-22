/**
 * https://leetcode.com/problems/happy-number/
 */

/**
    For solution explanation see Leetcode's solution
    https://leetcode.com/problems/happy-number/solution/
 */

    var isHappy = function(num) {
      let seen = new Set()
      while(num != 1 && !seen.has(num)){
          seen.add(num)
          num = getNext(num)
      }
      return num === 1
  };
  
  const getNext = (num)=>{
      let sum = 0;
      while(num > 0){
          let rightDigit = num % 10
              num = Math.floor(num / 10);
          sum+= rightDigit * rightDigit
      }
      return sum
  }