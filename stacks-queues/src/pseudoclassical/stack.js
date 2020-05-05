var Stack = function() {

  // this.length = 0;
  this.length = 0;
  this.storage = {};
  this.newProp = 0;
  };

Stack.prototype.push = function(value){
  // this[this.length] = value;//temporary var for storing a key value pair,
  // this.length ++;
this.storage[this.newProp] = value;
this.newProp++;
this.length++;
};

Stack.prototype.pop = function(){
  // if (this.length > 0){             //if length var is greater than 0
  //   //assign a temp to the most recent var
  //       //MUST INCLUDE -1 FOR THEE LAST ELEMENT
  //   this.length--;                    //decrement length bc you popped the value
  //  }
  //  var pop = this[this.length];
  //  delete this[this.length];
  //  return pop;
  if (this.length > 0){
  this.length--;
  this.newProp--;
  let temp = this.storage[this.newProp];
  delete this.storage[this.newProp];
  return temp;
  }
};

Stack.prototype.size = function(){

     return this.length;
};


