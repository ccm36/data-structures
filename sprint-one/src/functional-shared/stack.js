var Stack = function() {
  var someInstance = {
    storage: {},
    index: 0
  };

  extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods.push = function(value) {
  this.index++;
  this.storage[this.index] = value;
};

stackMethods.pop = function() {
  var popped = this.storage[this.index];
  delete this.storage[this.index];
  this.index--;
  return popped;
};

stackMethods.size = function() {
  if (this.index < 0) {
    return 0;
  }
  return this.index;
};


