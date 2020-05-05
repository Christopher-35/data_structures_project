var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
   if (!list.tail){
    list.head = list.tail = new Node(value);
   }else{
     let oldTail = list.tail;
     list.tail = new Node(value);
     oldTail.next = list.tail;
     list.tail.previous = oldTail;
   }
  };

  list.removeHead = function() {
  if (!list.head){
    return null;
  }else{
    let removedHead = list.head;

    if (list.head === list.tail){
      list.head = list.tail = null;
    }else{
      list.head = list.head.next;
      list.head.prev = null;
    }
    return removedHead.value;
  }
  
  };

  list.contains = function(target) {
  
  var node = list.head;
  while (node) {
    if (node.value === target) {
      return true;
    }
    node = node.next;
  }
  return false;
  }
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
