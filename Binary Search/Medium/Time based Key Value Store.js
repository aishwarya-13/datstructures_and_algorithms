/**
 * https://leetcode.com/problems/time-based-key-value-store/
 */



var TimeMap = function() {
  /**
      The map will be of form HashMap<key, Array[Array[timestamp, value]]>
      {
          foo: [[1, bar], [4, bar2], [6, bar3]]
      }
   */
   this.timeMap = {}
};

TimeMap.prototype.set = function(key, value, timestamp) { 
  if(this.timeMap[key] === undefined){
      this.timeMap[key] = []
  }
  this.timeMap[key].push([timestamp, value])
};


TimeMap.prototype.get = function(key, timestamp) {
  let arr = this.timeMap[key]
  if(arr === undefined){
      return ''
  }
  let left = 0,
      right = arr.length - 1,
      result = '';
  while(left <= right){
      let mid = left + Math.floor((right - left) / 2),
          time = arr[mid][0],
          value = arr[mid][1];
      if(time <= timestamp){
          left = mid + 1//we need a higher value since time is less than target
          result = value//this could be the desired result because if value is not there then we need to return value with immediate lowest value than the timestamp
//ex. if ['10', 'high'], ['20','low'] is the array and get(15) then we need to return ['10','high'] 
      }else{
          right = mid - 1
      }
  }
  return result
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/
