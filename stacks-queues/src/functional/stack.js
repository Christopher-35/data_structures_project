var Stack = function(){
  let stack = {};
  stack.storage = {};
  stack.length = 0;

  stack.push = function(value){
    stack.storage[stack.length] = value;
    stack.length++;
  };

  stack.pop = function(){
    if (stack.length > 0){
      let temp = stack.storage[stack.length - 1];
      delete stack.storage[stack.length - 1];
      stack.length--;
      return temp;
    }
  }

  stack.size = function(){
    return stack.length;
  }

  return stack;
}