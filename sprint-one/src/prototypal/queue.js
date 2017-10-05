var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.index = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  var dequeued = this.storage[0];
  delete this.storage[0];
  this.storage[0] = this.storage[1];
  this.index--;
  return dequeued;
};

queueMethods.size = function() {
  if (this.index < 0) {
    return this.index = 0;
  }
  return this.index;
};


