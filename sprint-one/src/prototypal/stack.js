var Stack = function() {
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.index = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  if(this.index < 0) {
    return this.index = 0;
  }
  return this.index;
};


