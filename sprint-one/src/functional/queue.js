var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.smallestKey = 0;
  storage.largestKey = -1;
  
  

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage.largestKey++;
    storage[storage.largestKey] = value;
  };

  someInstance.dequeue = function() {
    if (storage.largestKey < storage.smallestKey) {
      return undefined;
    } else {
      storage.smallestKey++;
      return storage[storage.smallestKey - 1];
    }
  };

  someInstance.size = function() {
    return storage.largestKey - storage.smallestKey + 1;
  };

  return someInstance;
};


//queue needs to
// report a size
// put a thing in
// when asking for a thing will give us first thing if not empty
// FIFO
//enqueue()
// 

//storage.smallestKey
