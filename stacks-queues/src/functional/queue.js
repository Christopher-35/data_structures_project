  function Queue(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let top = 0;
  let bottom = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[top] = value;//temporary var for storing a key value pair, 
     top ++;             //then increment the key and return temp
    return top;
  };

  someInstance.dequeue = function() {
    if (bottom < top){             //if top var is greater than 0
      // let temp = storage[0];  //assign a temp to the oldest
      // delete storage[0];     //MUST delete oldeest value
      // top--;                 //decrement top bc you popped the value
      // return temp;
     //loop over object, set temp = to key
      
      let temp = storage[bottom];
      delete storage[bottom];
      
      bottom++;
      return temp;
     }
  };

  someInstance.size = function() {
    // if (bottom === 0){
    //   return top;
    // }
    return top -bottom;
  };

  return someInstance;

};

