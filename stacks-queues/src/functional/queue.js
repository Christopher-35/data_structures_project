var Queue = function() {
  var someInstance = {};

  var storage = {};
  //create length var
  var length = 0;
  //create top var
  var top = 0; //used for enqueue
  //create bottom var to increment
  var bottom = 0; //used for dequeue
  someInstance.enqueue = function(value) {
    // NEED TOP AND BOTTOM VAR SO WE DONT OVERWRITE VALUES WHEN LENGTH IS INCREASED AND DECREASED
    //have storage [length] = value;
    storage[top] = value;
    //increment length
    length++;
    top++;
  };

  someInstance.dequeue = function() {
    //create if stmt for if length > 0
    if (length > 0) {
      //then we store temp var with bottom index-value
      let temp = storage[bottom];
      //delete the actual value
      delete storage[bottom];
      //decrement length
      length--;
      //increment bottom
      bottom++;
      //return temp
      return temp;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};