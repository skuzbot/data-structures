var Queue = function() {
  this.storage = {};
  this.smallestKey = 0;
  this.largestKey = -1;
};

Queue.prototype.enqueue = function(value) {
  this.largestKey++;
  this.storage[this.largestKey] = value;
};

Queue.prototype.dequeue = function () {
  if (this.largestKey < this.smallestKey) {
    return undefined;
  } else {
    var temp = this.storage[this.smallestKey];
    delete this.storage[this.smallestKey];
    this.smallestKey++;
    return temp;

  }
};

Queue.prototype.size = function () {
  return this.largestKey - this.smallestKey + 1;
};