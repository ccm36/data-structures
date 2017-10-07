var BinarySearchTree = function(value) {
  this.value = value;
  
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = new BinarySearchTree(value);
  
  if (value > this.value) {
    this.right === null ? this.right = newNode : this.right.insert(value);
  } else {
    this.left === null ? this.left = newNode : this.left.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  
  if (this.right !== null && target > this.value) {
    return this.right.contains(target);
  } else if (this.left !== null) {
    return this.right.contains(target);
  }
  
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 
 O(n) time complexity because for each function, you must move to each node
 to perform the desired action
 
 */
