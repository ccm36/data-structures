var Queue = function() {
  var someInstance = {
    storage: {},
    index: 0
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
}

queueMethods.size = function() {
  if (this.index < 0) {
    return this.index = 0;
  }
  return this.index;
};


