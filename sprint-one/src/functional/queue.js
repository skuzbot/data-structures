var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var lowestKey = 0;
  var highestKey = -1;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    highestKey++;
    storage[highestKey] = value;
  };

  someInstance.dequeue = function () {
    if (highestKey < lowestKey) {
      return undefined;
    } else {
      var temp = storage[lowestKey];
      delete storage[lowestKey];
      lowestKey++;
      return temp;
    }

  };

  someInstance.size = function () {
    return highestKey - lowestKey + 1;
  };

  return someInstance;
};
