var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};  
  //obj.storage = 0;
  obj.length = 0;
  
  _.extend(obj, objMethods);
  return obj;
};

var objMethods = {};
objMethods.push = function(value){
  this[this.length] = value;//temporary var for storing a key value pair, 
  
    this.length ++;             //then increment the key and return temp
    //return this.length;
}

objMethods.pop = function(){
  if (this.length > 0){             //if length var is greater than 0
    //assign a temp to the most recent var 
        //MUST INCLUDE -1 FOR THEE LAST ELEMENT
    this.length--;                    //decrement length bc you popped the value
   }
   var pop = this[this.length];
   delete this[this.length];
   return pop;

}

objMethods.size = function(){
 return this.length;

}


