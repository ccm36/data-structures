var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  return this.children.reduce(function(contain, child) {
    if (contain || child.value === target) {
      contain = true;
    }
    return contain;
  }, false);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
