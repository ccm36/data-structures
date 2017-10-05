var Stack = function() {
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function(value) {
  this.index++;
  this.storage[this.index] = value;
};

Stack.prototype.pop = function(value) {
  var popped = this.storage[this.index];
  delete this.storage[this.index];
  this.index--;
  return popped;
};

Stack.prototype.size = function() {
  if (this.index < 0) {
    return this.index = 0;
  }
  return this.index;
};

var someInstance = new Stack();

