/**
 * https://leetcode.com/problems/implement-queue-using-stacks/
 * 
 * We have to solve this question only using push(), pop() and length methods.
 * For peek we cannot use this.queue[0] because this is a array operation and in stack there are only two methods
 * push() and pop()
 */

/**
We have to solve this question only using push(), pop() and length methods.
For peek we cannot use this.queue[0] because this is a array operation and in stack there are only two methods push() and pop()
 */
var MyQueue = function() {
  this.input = []
  this.output = []
  this.front = null
};

MyQueue.prototype.push = function(x) {
  if(this.input.length === 0){
      this.front = x
  }
  this.input.push(x)
};

MyQueue.prototype.pop = function() {
  if(this.output.length === 0){
      while(this.input.length !== 0){
          this.output.push(this.input.pop())
      }
  }
  return this.output.pop()
};


MyQueue.prototype.peek = function() {
  let outputLen = this.output.length
  return outputLen !== 0 ? this.output[outputLen - 1] : this.front
};


MyQueue.prototype.empty = function() {
  return this.input.length === 0 && this.output.length === 0
};

/**
 * Without using shift method for pop
 */

var MyQueue = function() {
  this.queue = [] 
};

MyQueue.prototype.push = function(x) {
   this.queue.push(x)
};

MyQueue.prototype.pop = function() {
   let temp = [],
       frontEle = 0;
   for(let i=0; i<this.queue.length; i++){
       if(i === 0){
           frontEle = this.queue[i]
       }else{
           temp.push(this.queue[i])
       }
   }
   this.queue = [...temp]
   return frontEle
};

MyQueue.prototype.peek = function() {
   return this.queue[0]
};

MyQueue.prototype.empty = function() {
   return this.queue.length === 0
};


/**
 * Using shift method for pop
 */
var MyQueue = function() {
  this.queue = [] 
};

MyQueue.prototype.push = function(x) {
   this.queue.push(x)
};

MyQueue.prototype.pop = function() {
   return this.queue.shift()
};

MyQueue.prototype.peek = function() {
   return this.queue[0]
};

MyQueue.prototype.empty = function() {
   return this.queue.length === 0
};