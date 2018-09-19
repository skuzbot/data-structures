var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var sizeStack = 0;
  
  // Implement the methods below
  someInstance.push = function(value) {
    sizeStack++;
    storage[sizeStack] = value;
  };

  someInstance.pop = function() {
    if (sizeStack <= 0) {
      return undefined;
    }
    var temp = storage[sizeStack];
    delete storage[sizeStack];
    sizeStack--;
    return temp;
  };

  someInstance.size = function() {
    return sizeStack;
  };

  return someInstance;
};

