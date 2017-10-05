var Queue = function() {
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[0];
  delete this.storage[0];

  for (var i = 0; i < this.index; i++) {
    this.storage[i] = this.storage[i + 1];
  }

  this.index--;
  return dequeued;
};

Queue.prototype.size = function() {
  if (this.index < 0) {
    return this.index = 0;
  }
  return this.index;
};

var someInstance = new Queue();


