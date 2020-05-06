class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {
    this.storage = {};
    this.length = 0;
    this.top = 0;
    this.bottom = 0;
  }

  enqueue(value) {
    //create var in storage WITH TOP equal to value
    this.storage[this.top] = value;
    //increment top
    this.top++;
    //decrement length
    this.length++;
  }

  dequeue() {
    //create if if length > 0
    if (this.length > 0){
    //create temp WITH STORAGE BOTTOM VALUE
    let temp = this.storage[this.bottom];
    //delete that value
    delete this.storage[this.bottom];
    //increment bottom
    this.bottom++;
    //decrement length
    this.length--;
    return temp;
    }
  }

  size() {
    return this.length;
  }
}