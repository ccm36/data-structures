var Queue = function() {
  this.storage = {};
  this.index = 0;
};

Queue.prototype.size = function() {
  if (this.index < 0) {
    return this.index = 0;
  }
  return this.index;
};

var someInstance = new Queue();


