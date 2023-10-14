/**
 * https://leetcode.com/problems/min-stack/description/
 */


var MinStack = function() {
  this.stack = []
  this.min = []
};

/**
* To get min value at constant time, compare the min value between the coming value and top value of min stack and push the min onto the min stack
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  if(val <= this.min[this.min.length - 1] || this.min.length === 0){
      this.min.push(val)
  }
};

/**
 * Time: O(1)
 */
MinStack.prototype.pop = function() {
  let poppedVal = this.stack.pop()
  if(this.min[this.min.length - 1] === poppedVal){
      this.min.pop()
  }
};

/**
 * Time: O(1)
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * Time: O(1)
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1]
};