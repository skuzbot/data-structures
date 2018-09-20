var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var newQueue = {};

  newQueue.storage = {};
  
  newQueue.storage.smallestKey = 0;
  newQueue.storage.largestKey = -1;  
  
  newQueue.enqueue = queueMethods.enqueue;
  newQueue.dequeue = queueMethods.dequeue;
  newQueue.size = queueMethods.size;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  largestKey++;
  this.storage[largestKey] = value;
};

queueMethods.dequeue = function(){
  //Missing item here!
  var temp = this.storage[smallestKey];
  delete this.storage[smallestKey];
  smallestKey++;
  return temp;
};

queueMethods.size = function(){
  return this.storage.largestKey - this.storage.smallestKey + 1;
};
