var BinarySearchTree = function(value) {
  var newBST = Object.create(bSTMethods);
  newBST.value = value;
  newBST.right = null;
  newBST.left = null;
  return newBST;
};

var bSTMethods = {};

bSTMethods.insert = function(value) {
  (value < this.value) ? this.left = value : this.right = value;
};

bSTMethods.contains = function() {

};

bSTMethods.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
