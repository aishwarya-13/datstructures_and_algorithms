/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

 //[1,1,2,2] [2,2]
 //Time: O(N+M) for iteration and O(NlogN) + O(MlogM) for sorting 
 //Space: O(N+M)
 //Same solution as Intersection of two arrays I. Only here we wont use set
 const intersect = (nums1, nums2)=>{
  nums1.sort((a,b)=> a-b);
  nums2.sort((a,b)=> a-b);
  let p1 = 0,
      p2 = 0,
      result = []
  while(p1 < nums1.length && p2 < nums2.length){
      if(nums1[p1] === nums2[p2]){
          result.push(nums1[p1])
          p1++
          p2++
      }else if(nums1[p1] < nums2[p2]){
          p1++
      }else{
          p2++
      }
  }
  return result
};