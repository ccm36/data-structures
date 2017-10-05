var Stack = function() {
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.index = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.index++;
  this.storage[this.index] = value;
}; 

stackMethods.pop = function() {
  var popped = this.storage[this.index];
  delete this.storage[this.index];
  this.index--;
  return popped;
};

stackMethods.size = function() {
  if(this.index < 0) {
    return this.index = 0;
  }
  return this.index;
};


