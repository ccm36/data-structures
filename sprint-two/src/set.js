var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(!this.contains(item)) {
    this.storage.push(item);
  }
};

setPrototype.contains = function(item) {
  for(var i = 0; i < this.storage.length; i++) {
    if(this.storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for (var i = 0; i < this.storage.length; i++) {
    if(this.storage[i] === item) {
      return this.storage.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  O(n) : because I used for loops over an array as my set, they are all linear
  functions as they will need to search through every element in worst case
 */
