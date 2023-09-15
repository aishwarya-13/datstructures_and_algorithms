//https://leetcode.com/problems/koko-eating-bananas/

 /**
 We have to calculate the numbers of bananas eaten by Koko per hour
 https://www.youtube.com/watch?v=U2SozAs9RzA
 Time: O(log(max of piles) * piles.length)
  */
 var minEatingSpeed = function(piles, h) {
  let left = 1,
      right = Math.max(...piles),//flatten out the array
      min = Math.max(...piles);//we will not set result to +Infinity becuase we know the result max could be right pointer
  while(left<=right){
      //Here mid will be the rate that we will use to check the number of hours spent
      let k = left + Math.floor((right - left) / 2),
          hoursSpent = getHoursSpent(piles, k);
      //The total hour spent is less than h means this could be the desired result but since we are looking for a min value lets check on the left part which has more min values so move the right pointer.
      if(hoursSpent <= h){
          min = k//since the hours spent is less than h we can update our rate to take min;
          right = k - 1
      }else{//if hours spent is greater than h then move the left pointer beacuse since we went over h, Koko did not have enough time to eat all the banans within h. So we would increase our k so we will shift out binary search to the right side.
          left = k + 1
      }
  }
  return min
};

const getHoursSpent = (piles, k)=>{
  let output = 0;
  for(let pile of piles){
      output+= Math.ceil(pile / k)
  }
  return output
}