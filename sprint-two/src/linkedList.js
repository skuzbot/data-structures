var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = {};

  list.addToTail = function(value) {
    currentNode = Node(value);
    if (list.head === null) {
      list.head = currentNode;
      list.tail = currentNode;
    } else {
      list.tail.next = currentNode;
      list.tail = currentNode;
    }
  };

  list.removeHead = function() {
    tempHead = list.head;
    list.head = list.head.next;
    return tempHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    for (currentNode; currentNode !== null; currentNode = currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
    }
    return false;
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

