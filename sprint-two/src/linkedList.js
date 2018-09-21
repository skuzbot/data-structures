var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    
    var tempTail = list.tail;
    list.tail = Node(value);
    list.tail.next = tempTail;

    if (list.head === null) {
      list.head = Node(value);
      list.head.next = list.tail;
    }
    
  };

  list.removeHead = function() {
    list.head = list.head.next;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 