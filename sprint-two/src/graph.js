

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodes.indexOf(node);
  this.nodes.splice(index, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes.includes(fromNode) && this.nodes.includes(toNode)) {
    for(var i = 0; i < this.edges.length; i++) {
      if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      this.edges.splice(i, 1);
    }
  };
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node);
  });
};

var someInstance = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?

  O(1) : .addNode and .addEdge 
    they don't depend on the size of data,
    putting the new node or edge in the graph is constant

  O(n) : .contains, .removeNode, .removeEdge, and .forEachNode
    they each iterate through each piece of data in the graph

  O(n^2) : .hasEdge
    since I searched for both, if the nodes exists, and if they have 
    a connecting edge, this iterates through the data twice
    (very inefficient)...MVP


 */


