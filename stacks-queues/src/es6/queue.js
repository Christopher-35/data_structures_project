class Queue {
  constructor () {
    this.storage = {};
    this.length = 0;
    this.top = 0;
    this.bottom = 0;
  }

  enqueue(value) {
    this.length++;
    this.top++;
    this.storage[this.top] = value;
  }

  dequeue(){
    if (this.length > 0){
      this.bottom++;
      let temp = this.storage[this.bottom];
      delete this.storage[this.bottom];
      this.length--;
      return temp;
    }
  }

  size(){
    return this.length;
  }
}

const bass = new Queue();

console.log(bass.enqueue('a'));
console.log(bass.dequeue());
console.log(bass.enqueue('b'));
console.log(bass.dequeue());
