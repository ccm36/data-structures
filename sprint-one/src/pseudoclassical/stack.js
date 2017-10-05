var Stack = function() {
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.size = function() {
  if (this.index < 0) {
    return this.index = 0;
  }
  return this.index;
}

var someInstance = new Stack();

