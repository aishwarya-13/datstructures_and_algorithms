/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 */

 /**
    Time: O(N)
    space: O(N) for array and O(10) for vowels - not counted as such
  */
    var reverseVowels = function(s) {
      let vowelMap = {'a':'a', 'e':'e', 'i':'i', 'o':'o', 'u':'u', 
                   'A':'A', 'E':'E', 'I':'I', 'O':'O', 'U':'U'};
       let left = 0,
           right = s.length - 1,
           str = s.split('');
       while(left < right){
           if(vowelMap[str[left]] !== undefined && vowelMap[str[right]] !== undefined){
               [str[left], str[right]] = [str[right], str[left]]
               left++;
               right--;
           }else if(vowelMap[str[left]] === undefined && vowelMap[str[right]] !== undefined){
               left++
           }else {
               right--
           }
       }
       return str.join('');
   };