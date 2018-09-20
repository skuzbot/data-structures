var Stack = function() {
  this.storage = {};
  this.height = 0;
};


Stack.prototype.push = function(value) {
  this.height++;
  this.storage[this.height] = value;
};

Stack.prototype.pop = function() {
  if (this.height <= 0) {
    return undefined;
  } else {
    var temp = this.storage[this.height];
    delete this.storage[this.height];
    this.height--;
    return temp;
  }
};

Stack.prototype.size = function() {
  return this.height;
};