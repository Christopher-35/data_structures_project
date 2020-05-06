var Stack = function() {
  var obj = {};
  obj.length = 0;
  obj.storage = {};
  //Object.assign(obj, stackMethods);  EITHER ORRRR
  _.extend(obj,stackMethods);
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.length] = value;
  this.length++;
 
  return length;
};

stackMethods.pop = function(){
  if (this.length > 0){
    let temp = this.storage[this.length-1];
    delete this.storage[this.length-1];
    this.length--
    return temp;

  }

};

stackMethods.size = function(){
  return this.length;
};


