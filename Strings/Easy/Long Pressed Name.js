/**
 * https://leetcode.com/problems/long-pressed-name/
 */
/**
Two pointers: i) One to iterate 'name' string ii) Second to iterate 'typed' string
1] If both are equal move both pointers ahead
2] If both are not equal check if 'typed' current and 'name' previous are equal (long pressed)
3] If both are not equal and typed's current and previous are not equal then return false.
 */
//Time: O(N) Space: O(1)
var isLongPressedName = function(name, typed) {
  let p1 = 0,
      p2 = 0;
  while(p1<name.length || p2<typed.length){
      if(name[p1] === typed[p2]){
          p1++
          p2++
      }else{
          if(name[p1-1] === typed[p2]){//if long pressed
              p2++
          }else{
              return false
          }
      }
  }
  return true
};