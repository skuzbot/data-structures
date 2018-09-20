var Stack = function () {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.height = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.height++;
  this.storage[this.height] = value;
};

stackMethods.pop = function () {
  if (this.height <= 0) {
    return undefined;
  } else {
    var temp = this.storage[this.height];
    delete this.storage[this.height];
    this.height--;
    return temp;
  }
};

stackMethods.size = function () {
  return this.height;
};