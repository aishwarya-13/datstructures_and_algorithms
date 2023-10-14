/**
 * https://leetcode.com/problems/lru-cache/
 */

/**
 * @param {number} capacity
 */
 /**
 LRU means an item that hasn't been used for the longest amount of time.
  */
 var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();//why use Map because we want order
};

/** 
 * @param {number} key
 * @return {number}
 */
 /**
    If key does not exists return -1
    If the key exists, we delete it from the cache and add it again to the end of the cache to indicate that it was recently accessed.
  */
LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)){
        return -1;
    }
    let val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
 /**
 If the key already exists in the cache, we delete it first. 
 If the cache is already at capacity, we delete the least recently used entry (the first key in the Map object). Then we add the new key-value pair to the cache.
  */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        this.cache.delete(key);
    }
    if(this.cache.size === this.capacity){
        let lruKey = this.cache.keys().next().value;
        this.cache.delete(lruKey);
    }
    this.cache.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */