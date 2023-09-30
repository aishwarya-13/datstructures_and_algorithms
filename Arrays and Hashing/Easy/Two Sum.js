/**
 * https://leetcode.com/problems/two-sum/
 */


 /**
    The idea here is to check if the difference between the target and current element exists in the array.
    If it does then we have our result.
    If not then store the current element and its index in the map.
    Why store the current ele and not the diff?
    Because when we store the current ele in the future while itearting the array the diff between the target and current ele would exist in the map
    Time: O(N)
    Space: O(N)
    ** In map store ele as key and index as value. In if condition check for difference
  */
    var twoSum = function(nums, target) {
        let map = {};
        for(let i=0; i<nums.length; i++){
            let diff = target - nums[i];//do not take Math.abs here. You will always do the same mistake
            if(map[diff] === undefined){
                map[nums[i]] = i;
            }else{
                return [map[diff], i]
            }
        }
        return [-1,-1];
    };
    
    