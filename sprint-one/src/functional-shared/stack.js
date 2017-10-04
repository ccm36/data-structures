var Stack = function() {
  var someInstance = {
    storage: {},
    index: 0
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

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


