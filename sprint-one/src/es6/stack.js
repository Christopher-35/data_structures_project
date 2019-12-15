class Stack {
  constructor() {
    this.length = 0;
  }

  push(value){
    this[this.length] = value;//temporary var for storing a key value pair, 
    this.length ++;  
  }

  pop(){
    if (this.length > 0){             //if length var is greater than 0
      //assign a temp to the most recent var 
          //MUST INCLUDE -1 FOR THEE LAST ELEMENT
      this.length--;                    //decrement length bc you popped the value
     }
     var pop = this[this.length];
     delete this[this.length];
     return pop;
  }

  size(){
    return this.length || 0;
  }

}