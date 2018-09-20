var Queue = function () {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.lowestKey = 0;
  newQueue.highestKey = -1;
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.highestKey++;
  this.storage[this.highestKey] = value;
};
queueMethods.dequeue = function() {
  if (this.highestKey < this.lowestKey) {
    return undefined;
  } else {
    var temp = this.storage[this.lowestKey];
    delete this.storage[this.lowestKey];
    this.lowestKey++;
    return temp;
  }
};
queueMethods.size = function() {
  return this.highestKey - this.lowestKey + 1;
};