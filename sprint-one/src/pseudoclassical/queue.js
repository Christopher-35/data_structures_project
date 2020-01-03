var Queue = function() {
  this.length = 0;
  this.oldProp = 0;
  this.newProp = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function(value){
  // this.length ++;              //increase length when adding prop
  // this.storage[this.newProp] = value;//store a new property in storage
  // this.newProp++;
  this.storage[this.newProp] = value;
  this.length++;
  this.newProp++;
};

Queue.prototype.dequeue = function(){
  // if (this.length !== 0){
  //   this.length--;
  // }
  // var temp = this.storage[this.oldProp];//set temp var equal to oldest prop
  // //delete this.storage[this.oldProp];
  // this.oldProp++;//increase oldes prop key
  // return temp; //return that stored value

  if (this.length > 0){
  let temp = this.storage[this.oldProp];//needs to be in brackets beause oldProp is not a part of storage
  delete this.storage[this.oldProp];
  this.length--;
  this.oldProp++;
  return temp;
  }
};

Queue.prototype.size = function(){
      return this.length;
};