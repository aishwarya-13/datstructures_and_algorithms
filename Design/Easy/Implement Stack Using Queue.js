/**
 * https://leetcode.com/problems/implement-stack-using-queues/description/
 */


var MyStack = function() {
  this.queue = []
};

/** 
* @param {number} x
* @return {void}

Time: O(N)
Last inserted element must be at the front of the queue
Cannot reverse it because the order of push changes
Here we have to iterate till second last element else the order wont maintain
*/
MyStack.prototype.push = function(x) {
  this.queue.push(x)
  for(let i=0; i<this.queue.length - 1; i++){
      this.queue.push(this.queue.shift())
  }
  console.log(this.queue)
};

/**
* @return {number}
Time: O(1) ?? since shift() takes O(N) is this O(N) too?
*/
MyStack.prototype.pop = function() {
  return this.queue.shift()
};

/**
* @return {number}
Time: O(1)
*/
MyStack.prototype.top = function() {
  return this.queue[0]
};

/**
* @return {boolean}
Time: O(1)
*/
MyStack.prototype.empty = function() {
  return this.queue.length === 0
};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/