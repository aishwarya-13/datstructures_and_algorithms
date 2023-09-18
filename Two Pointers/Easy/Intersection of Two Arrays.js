/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 */

/**
    [4,5,9] [4,4,8,9,9]
    Time: O(N+M)
    Space: O(N+M) worst case where all the elements are different
 */
    const intersection = (nums1, nums2)=>{
      nums1.sort((a,b)=> a-b)
      nums2.sort((a,b)=> a-b)
      let p1 = 0,
          p2 = 0,
          result = new Set();
      while(p1 < nums1.length && p2 < nums2.length){
          if(nums1[p1] === nums2[p2] && !result.has(nums1[p1])){
              result.add(nums1[p1])
          }else if(nums1[p1] < nums2[p2]){
              p1++
          }else{
              p2++
          }
      }
      return [...result]
  };