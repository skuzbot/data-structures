// Instantiation pseudoclassical
var Graph = function () {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.storage[node] = {
    value: node,
    connections: {},
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return !!this.storage[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (var k in this.storage) {
    if (this.storage[k].value === node) {
      delete this.storage[k];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  if (this.storage[fromNode].connections.contains(toNode)) {
    return true;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.storage[fromNode].connections[toNode] = toNode;
  this.storage[toNode].connections[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {};

/*
 * Complexity: What is the time complexity of the above functions?
 */