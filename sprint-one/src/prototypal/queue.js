var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.index = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  if (this.index < 0) {
    return this.index = 0;
  }
  return this.index;
};


