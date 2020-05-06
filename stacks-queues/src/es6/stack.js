class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
    //create var in storage with length
    this.storage[this.length] = value;
    //increment length
    this.length++;
  }

  pop(value) {
    //create if if length is longer than 0
    if (this.length > 0) {
      //then create temp var in storage WITH LENGTH -1
      let temp = this.storage[this.length - 1];
      //delete property
      delete this.storage[this.length - 1];
      //decrement length
      this.length--;
      return temp;
    }
  }

  size(value) {
    return this.length;
  }
}