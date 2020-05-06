var LinkedList = function(){
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head ===null  && list.tail ===null){
      list.head = list.tail = new Node(value);
    }
    else {
      let oldTail = list.tail;
      list.tail = new Node(value);
      oldTail.next = list.tail;
      list.tail.prev = oldTail;
    }
  }

  list.addToHead = function(value){
    //if head and tail are both null, assign them to the same node value
    if (list.head === null && list.tail ===null){
      list.head = list.tail = new Node(value);
    }
    else {
    let oldHead = list.head;
    list.head = new Node(value);
    list.head.next = oldHead;
    oldHead.prev = list.head;
    }
  }

  list.removeTail = function(value){
    if (list.tail === null && list.head ===null){
      return null;
    }

    else if (list.tail === list.head){
      let oldTail = list.tail;
      list.tail = list.head = null;
      return oldTail.value;
    }

    else if (list.tail !== list.head){
      let oldTail = list.tail;
      list.tail = oldTail.prev;
      list.tail.next = null;
      return oldTail.value;
    }

  }

  list.removeHead = function(){
    //if the head is equal to null, return null
    if(list.head === null){
      return null;
    }
    else if (list.head === list.tail){
      let tempVal = list.head.value;
      list.head = list.tail = null;
      return tempVal;
    }

    else if (list.head !== list.tail){

      let tempVal = list.head.value;
      list.head = list.head.next;
      list.head.prev = null;
      return tempVal;
    }

  }

  list.contains = function(value){
    let currentNode = list.head;

    //while currentNode is truthy
    while (currentNode){
      //check its value and return true if its our value
      if (currentNode.value === value){
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;
  }


  return list;
}

var Node = function(value){
  let node = {};
  node.next = null;
  node.prev = null;
  node.value = value;
  return node;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
