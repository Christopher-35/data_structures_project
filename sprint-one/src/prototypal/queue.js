var Queue = function() {
  
  
var obj = Object.create(queueMethods);//THIS REFERS TO OBJ

obj.length = 0;
obj.newProp = 0;
obj.oldProp = 0;
obj.storage = {};
  
  return obj;
};

  var queueMethods = {

  enqueue : function(value) {
    this.length ++;              //increase length when adding prop
    this.storage[this.newProp] = value;//store a new property in storage
    this.newProp++;             //increment new prop var so u dont overwrite
      },

  dequeue : function() {
    if (this.length !== 0){
      this.length--;
    }
    var temp = this.storage[this.oldProp];//set temp var equal to oldest prop
    //delete this.storage[this.oldProp];
    this.oldProp++;//increase oldes prop key
    return temp; //return that stored value
  },

  size : function() {
    return this.length || 0;
  },

};

