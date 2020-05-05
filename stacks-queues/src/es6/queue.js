class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
    this.oldProp = 0; 
    this.newProp = 0; 
    this.storage = {}; 

  }

  enqueue(value){
  this.length ++;              //increase length when adding prop
  this.storage[this.newProp] = value;//store a new property in storage
  this.newProp++; 
  }

  dequeue(){
    if (this.length !== 0){
      this.length--;
    }
    var temp = this.storage[this.oldProp];//set temp var equal to oldest prop
    //delete this.storage[this.oldProp];
    this.oldProp++;//increase oldes prop key
    return temp; //return that stored value
  }

  size(){
    return this.length || 0;
  }




}


