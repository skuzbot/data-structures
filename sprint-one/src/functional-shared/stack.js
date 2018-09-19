var Stack = function() {
  var newStack = {};

  newStack.storage = {};
  
  newStack.storage.largestKey = -1;
  
  newStack.size = stackMethods.size;
  newStack.push = stackMethods.push;
  newStack.pop = stackMethods.pop;
  
  return newStack;
};

var stackMethods = {   
};

stackMethods.push = function(value) {
  this.storage.largestKey++;
  this.storage[this.storage.largestKey] = value;
};

stackMethods.pop = function() {
  if (this.storage.largestKey < 0) {
    return undefined;
  } else {
    var temp = this.storage[this.storage.largestKey];
    delete this.storage[this.storage.largestKey];
    this.storage.largestKey--;
    return temp;
  }
};

stackMethods.size = function() {
  return this.storage.largestKey + 1;
};



