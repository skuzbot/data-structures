var BinarySearchTree = function (value) {
  var newBST = Object.create(bSTMethods);
  newBST.value = value;
  newBST.right = undefined;
  newBST.left = undefined;
  return newBST;
};

var bSTMethods = {};

bSTMethods.insert = function (value) {
  if (value === this.value) {
    return;
  }
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

bSTMethods.contains = function (value) {
  var currentNode = this;
  if (currentNode.value === value) {
    return true;
  } else if (currentNode.left === undefined && currentNode.right === undefined) {
    return false;
  } else {
    return (value < currentNode.value) ? currentNode.left.contains(value) : currentNode.right.contains(value);
  }
};

bSTMethods.depthFirstLog = function (cb) {
  var currentNode = this;
  cb(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */