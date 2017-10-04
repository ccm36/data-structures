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

stackMethods.size = function() {
  if (this.index < 0) {
    return 0;
  }
  return this.index;
};


