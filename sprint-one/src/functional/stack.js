var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let length = 0;
  
 // var length = Object.size(storage);
  // Implement the methods below
  //ALL OF THESE INSTANCES ARE BEING ASSIGNED TO THE VALUE OF A NEW PROPERTY IN SOME INSTANCE 
  someInstance.push = function(value) {//push key value into storage,
    
    storage[length] = value;//temporary var for storing a key value pair, 
    length ++;             //then increment the key and return temp
    return length;
    
  };

  someInstance.pop = function() {
    if (length > 0){             //if length var is greater than 0
    let temp = storage[length-1];  //assign a temp to the most recent var 
    //delete storage[length-1];     //MUST INCLUDE -1 FOR THEE LAST ELEMENT
    length--;                    //decrement length bc you popped the value
    return temp;
    }
  };

  someInstance.size = function() {
    return length; //which is the length
               //(ALWAYS GREATER THAN LAST ELEMENT)
  };

  return someInstance;
};
