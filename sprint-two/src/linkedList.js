var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list._size = 0;


  list.addToTail = function(value) {
    var newNode = new Node(value);
    var currentNode = this.head;

    if(!currentNode) {
      this.head = newNode;
      this.tail = newNode;
      this._size++;
    }

    this.tail.next = newNode;
    this.tail = newNode; 
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
