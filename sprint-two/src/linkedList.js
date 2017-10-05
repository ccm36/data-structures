var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    var newNode = new Node(value);
    
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode; 
  };

  list.removeHead = function() {
    var head = this.head;
    this.head = this.head.next;
    return head.value;
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode.value !== target) {
      if (!currentNode.next) {
        return false
      }
      currentNode = currentNode.next;
    }
    return true;
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

  removeHead && addToTail are O(1) because they just add or remove
  assuming we know the location of where we are performing the action

  contains is O(n) because if the worst case, we have to look at each
  node in the list individully to determine if it is or is not contained

 */
