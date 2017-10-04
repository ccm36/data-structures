var Queue = function() {
  var someInstance = {
    storage: {},
    index: 0
  };

  extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
}

queueMethods.size = function() {
  if (this.index < 0) {
    return this.index = 0;
  }
  return this.index;
};


