/**
Maintain 2 stacks
1. One For pushing and popping as normal
2. Second to maintain min value
 */
var MinStack = function () {
  this.stack = [];
  this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
/**
1. Push onto the first stack as usual
2. When pushing onto min stack, only push in these 2 cases
  a. If the min stack is empty
  b. If the coming value is less than the top value on min stack
*/
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  //imp to use <= here
  if (val <= this.min[this.min.length - 1] || this.min.length === 0) {
    this.min.push(val);
  }
};

/**
 * @return {void}
 */
/**
1. Pop as usual from the stack
2. Only pop from the min stack when the popped value from the usual stack is the top value of the min stack
*/
MinStack.prototype.pop = function () {
  let poppedVal = this.stack.pop();
  if (poppedVal === this.min[this.min.length - 1]) {
    this.min.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
