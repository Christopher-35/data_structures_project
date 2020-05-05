var Queue = function() {
  var obj = {
   storage : {},
   oldProp : 0,
   newProp : 0,
   length : 0
     };
  _.extend(obj, queueMethods);
  return obj;

};

var queueMethods = {

  enqueue : function(value) {
    this.length ++;              //just increase length prop in obj
    this.storage[this.newProp] = value;//temporary var for storing a key value pair, 
    this.newProp++;             //then increment the key and return temp
      },

  dequeue : function() {
    if (this.length !== 0){
      this.length--;
    }
    var temp = this.storage[this.oldProp];
    //delete this.storage[this.oldProp];
    this.oldProp++;
    return temp;
  },

  size : function() {
    return this.length || 0;
  },

};




