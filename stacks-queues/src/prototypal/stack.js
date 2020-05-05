var Stack = function() {
  
  
    var obj = Object.create(stackMethods);//THIS REFERS TO OBJ
    
    obj.length = 0;
    // obj.newProp = 0;
    // obj.oldProp = 0;
    // obj.storage = {};
      
      return obj;
    };
    
      var stackMethods = {
    
      push : function(value) {
        this[this.length] = value;//temporary var for storing a key value pair, 
        this.length ++;          //increment new prop var so u dont overwrite
          },
    
      pop : function() {
        
         if (this.length > 0){             //if length var is greater than 0
          //assign a temp to the most recent var 
              //MUST INCLUDE -1 FOR THEE LAST ELEMENT
          this.length--;                    //decrement length bc you popped the value
         }
         var pop = this[this.length];
         delete this[this.length];
         return pop;
      },
    
      size : function() {
        return this.length || 0;
      }
    }
