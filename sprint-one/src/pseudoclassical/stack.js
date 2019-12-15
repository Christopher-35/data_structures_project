var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.length = 0;
  };

Stack.prototype.push = function(value){
  this[this.length] = value;//temporary var for storing a key value pair,
  this.length ++;
};

Stack.prototype.pop = function(){
  if (this.length > 0){             //if length var is greater than 0
    //assign a temp to the most recent var
        //MUST INCLUDE -1 FOR THEE LAST ELEMENT
    this.length--;                    //decrement length bc you popped the value
   }
   var pop = this[this.length];
   delete this[this.length];
   return pop;
};

Stack.prototype.size = function(){

    return this.length || 0;
};


