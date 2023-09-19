/**
 * https://leetcode.com/problems/reverse-string-ii/description/
 */
 /**
    Time: O(N*k) ???
    Space: O(N) for array. confirm??
    The problem statement is confusing.
    We just have to reverse i to i+k-1 characters and after reversing move i by 2k steps ahead
    This is because the function loops through the input string s once and performs a constant number of operations for each character in the string. The while loop that reverses the substring between left and right runs at most k/2 times for each 2k-length substring, which is a constant. Therefore, the time complexity of the reverseStr function is linear in the length of the input string s, or O(n).
  */
    var reverseStr = function(s, k) {
      let i = 0,
          str = s.split('')
      while(i < str.length){
          let left = i,
              right = i + k - 1
          while(left<right){
              [str[left], str[right]] = [str[right], str[left]]
              left++
              right--
          }
          i += 2*k
      }
      return str.join('')
  };