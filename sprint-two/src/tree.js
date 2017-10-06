var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value)
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  
  return this.children.reduce(function(contain, child) {
    if (contain || child.contains(target)) {
      contain = true;
    }
    return contain;
  }, false);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
